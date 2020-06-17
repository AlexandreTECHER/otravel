<?php

namespace App\Controller;

use App\Entity\Commentary;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PlacesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;




class CommentaryController extends AbstractController
{

    /**
     * @Route("/commentary/add", name="commentary_add", methods={"POST"})
     * @return Response
     */
    public function CommentPlaces(PlacesRepository $placesRepository, Request $request, EntityManagerInterface $entityManager)
    {

        $data = json_decode($request->getContent());
        $text = htmlspecialchars($data->text);       
        $placesId = $data->places_id;
        $instance = $placesRepository->findOneBy(['id' => $placesId]);
        
        $newCommentary = new Commentary();
        $newCommentary->setUser($this->getUser());
        $newCommentary->setPlaces($instance);
        $newCommentary->setText($text);
        $entityManager->persist($newCommentary);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'Le commentaire a bien été ajouté'
        ];

        return new JsonResponse($data, 201);
    
    }

}