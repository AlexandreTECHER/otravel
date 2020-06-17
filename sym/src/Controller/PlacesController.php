<?php

namespace App\Controller;

use App\Entity\Places;
use App\Entity\PlacePicture;
use App\Repository\CategoryRepository;
use App\Repository\PlacesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class PlacesController extends AbstractController
{
  
    /**
     * @Route("/places/edit/{id}", name="places_edit_{id}", methods={"POST"})
     * @return Response
     */
    public function edit(Places $places, PlacesRepository $placesRepository, Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager)
    {

    }

    /**
     * @Route("/places/add", name="places_add", methods={"POST"})
     * @return Response
     */
    public function add(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, CategoryRepository $categoryRepository)
    {
    
        $places = $serializer->deserialize($request->getContent(), Places::class, 'json');
        $data = json_decode($request->getContent()); // je récup juste les données renseignées

        $description = htmlspecialchars($places->getDescription());  
        $name = htmlspecialchars($places->getName());
        $street = htmlspecialchars($places->getStreet());
        $zipcode = htmlspecialchars($places->getZipcode());
        $city = htmlspecialchars($places->getCity());
        $lng = htmlspecialchars($places->getLng());
        $lat = htmlspecialchars($places->getLat());
        
        $newPlace = new Places();
        $newPlace->setDescription($description);
        $newPlace->setName($name);  
        $newPlace->setStreet($street); 
        $newPlace->setZipcode($zipcode); 
        $newPlace->setCity($city); 
        $newPlace->setUser($this->getUser());
        $newPlace->setLng($lng);
        $newPlace->setLat($lat);
        
        if(!empty($data->place_picture && $data->nameFile)){

            $pictureForm = $data->place_picture ;
            $img = preg_replace('#^data:image/\w+;base64,#i', '', $pictureForm);
            $nomfichier = explode(".", $data->nameFile)  ;
            $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
            $path = 'uploads/images/places/'. $nomfichierUnique;
            $success = file_put_contents($path, base64_decode($img));

            if(isset($success)){
                $pathFileBdd = 'uploads/images/places/'.$nomfichierUnique;
                $picture = new PlacePicture(); 
                $picture->setName($pathFileBdd);
                $newPlace->setPlacesPicture($picture);
                
            }

        }
        
        $categoriesSelected = $data->category;

        
        if(empty($categoriesSelected)){
            $data = [
                'status' => 400,
                'message' => 'Veuillez ajouter une catégorie'
            ];
            return new JsonResponse($data,400);
        }else{
            foreach($categoriesSelected as $uniqueCategory){
                $findCategory = $categoryRepository->findOneBy(['id' => $uniqueCategory]);
                $newPlace->addCategory($findCategory);
            }
        }

        if(!isset($name)){

            $data = [
                'status' => 400,
                'message' => 'Vous devez saisir un nom'
            ];
            return new JsonResponse($data, 400);
        }

        $entityManager->persist($newPlace);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'Le lieu a bien été ajouté'
        ];

        return new JsonResponse($data, 201);
        
    }
    
    /**
     * @Route("/places/delete/{id}", name="places_delete", methods={"POST"})
     */
    public function delete()
    {
       
    }
}

