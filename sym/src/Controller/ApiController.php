<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Category;
use App\Entity\Commentary;
use App\Entity\CommentaryPicture;
use App\Entity\Places;
use App\Entity\PlacePicture;
use App\Entity\User;
use App\Repository\UserRepository;
use App\Repository\CategoryRepository;
use App\Repository\PlacesRepository;
use App\Repository\PlacePictureRepository;
use App\Repository\CommentaryRepository;
use App\Repository\CommentaryPictureRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/user", name="browse_user", methods={"POST"})
     */
    public function browse(UserRepository $userRepository, SerializerInterface $serializer)
    {
        $user = $userRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'user']);
        return $this->json($data);

    }

    /**
     * @Route("/api/user/{id}", name="read_user", methods={"POST"})
     */
    public function read(User $user, UserRepository $userRepository, SerializerInterface $serializer)
    {
        $user = $userRepository->find($user);
        $data = $serializer->normalize($user, null,['groups' => 'user']);
        return $this->json($data);

    }

    /**
     * @Route("/api/category", name="browse_category", methods={"POST"})
     */
    public function browse_category(CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
        $user = $categoryRepository->findAll();

        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);

    }

    /**
     * @Route("/api/category/{id}", name="read_category", methods={"POST"})
     */
    public function read_category(Category $category, CategoryRepository $categoryRepository, SerializerInterface $serializer)
    {
     
        $user = $categoryRepository->find($category);
        $data = $serializer->normalize($user, null, ['groups' => 'category']);
        return $this->json($data);
        
    }

    /**
     * @Route("/api/adress/places", name="read_adress_places", methods={"POST"})
     */
    public function placesAdress(PlacesRepository $placesRepository, Request $request, SerializerInterface $serializer)
    {

        $data = json_decode($request->getContent());

        $lng = $data->lng;
        $lat = $data->lat;
        $array = [$lng, $lat];
        $stringifyData = implode(",", $array);
        $geoCode = $stringifyData;
        $geocoder = new \OpenCage\Geocoder\Geocoder('b38489ac53674c90b5e1b886beb901a3');
        $result = $geocoder->geocode($geoCode); # latitude,longitude (y,x)
        $returnAdress = $serializer->normalize($result);

        return $this->json($returnAdress);

    }

    /**
     * @Route("/api/places", name="browse_places", methods={"POST"})
     */
    public function browse_places(PlacesRepository $placesRepository, SerializerInterface $serializer)
    {

        $user = $placesRepository->findAll();
        
        $data = $serializer->normalize($user, null, ['groups' => 'places']);

        return $this->json($data);

    }

    /**
     * @Route("/api/places/{id}", name="read_places", methods={"POST"})
     */
    public function read_places(Places $places, PlacesRepository $placesRepository, SerializerInterface $serializer)
    {
        $user = $placesRepository->find($places);
        $data = $serializer->normalize($user, null, ['groups' => 'places']);

        return $this->json($data);

    }

    /**
     * @Route("/api/commentary", name="browse_commentary", methods={"POST"})
     */
    public function browse_commentary(CommentaryRepository $commentaryRepository, SerializerInterface $serializer)
    {
        $user = $commentaryRepository->findAll();
        $data = $serializer->normalize($user, null, ['groups' => 'commentary']);

        return $this->json($data);

    }

    /**
     * @Route("/api/commentary/{id}", name="read_commentary", methods={"POST"})
     */
    public function read_commentary(Commentary $commentary, CommentaryRepository $commentaryRepository, SerializerInterface $serializer)
    {
      
        $user = $commentaryRepository->find($commentary);
        $data = $serializer->normalize($user, null, ['groups' => 'commentary']);
        return $this->json($data);

    }

    /**
     * @Route("/api/place_picture", name="browse_place_picture", methods={"POST"})
     */
    public function browse_place_picture(PlacePictureRepository $placepictureRepository, SerializerInterface $serializer)
    {

        $user = $placepictureRepository->findAll();
        $data = $serializer->normalize($user, null, ['groups' => 'place_picture']);

        return $this->json($data);

    }

    /**
     * @Route("/api/place_picture/{id}", name="read_place_picture", methods={"POST"})
     */
    public function read_place_picture(PlacePicture $placepicture, PlacePictureRepository $placepictureRepository, SerializerInterface $serializer)
    {

        $user = $placepictureRepository->find($placepicture);
        $data = $serializer->normalize($user, null, ['groups' => 'place_picture']);

        return $this->json($data);

    }

    /**
     * @Route("/api/commentary_picture", name="browse_commentary_picture", methods={"POST"})
     */
    public function browse_commentary_picture(CommentaryPictureRepository $commentarypictureRepository, SerializerInterface $serializer)
    {

        $user = $commentarypictureRepository->findAll();
        $data = $serializer->normalize($user, null, ['groups' => 'commentary_picture']);

        return $this->json($data);

    }

    /**
     * @Route("/api/commentary_picture/{id}", name="read_commentary_picture", methods={"POST"})
     */
    public function read_commentary_picture(CommentaryPicture $commentarypicture, CommentaryPictureRepository $commentarypictureRepository, SerializerInterface $serializer)
    {

        $user = $commentarypictureRepository->find($commentarypicture);
        $data = $serializer->normalize($user, null, ['groups' => 'commentary_picture']);

        return $this->json($data);

    }
    
    /**
     * @Route("/api/category/places/{id}", name="read_places_from_category", methods={"POST"})
     */
    public function placesFromCategory(Category $category, PlacesRepository $placesRepository, SerializerInterface $serializer)
    {
        
        $places = $placesRepository->placesByCategory($category->getId());
        $data = $serializer->normalize($places, null, ['groups' => 'places']);

        return $this->json($data);
        
    }

}

