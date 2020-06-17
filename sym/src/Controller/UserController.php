<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;


class UserController extends AbstractController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    
    /**
     * @Route("/inscription", name="inscription", methods={"POST"})
     * @return Response
     */
    public function inscription(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, UserRepository $userRepository)
    {
       
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        $content = json_decode($request->getContent());
        
        $user->setRoles(['ROLE_USER']);
        
        /*email verification*/
        $emailForm = htmlspecialchars($user->getEmail());

        $emailBdd = $userRepository->findOneby(['email' => $emailForm]);
        
        if($emailBdd){ 
            
            $userEmail = htmlspecialchars($emailBdd->getEmail());
            if($emailForm == $userEmail){
                
                $data = [
                    'status' => 400,
                    'message' => 'L\'adresse email est déja utilisée'
                ];
                
                return new JsonResponse($data, 400);
            }
            
        }

        /*username verification*/
        $usernameForm = htmlspecialchars($user->getUsername());
        $usernameBdd = $userRepository->findOneby(['username' => $usernameForm]);
        
        if($usernameBdd){
            
            $userNameBdd = htmlspecialchars($usernameBdd->getUsername());
            
            if($usernameForm == $userNameBdd){
                
                $data = [
                    'status' => 400,
                    'message' => 'Le username choisi n\'est pas disponible'
                ];
                
                return new JsonResponse($data, 400);
            }
            
        }     
        
        /*password verification*/
        $password = htmlspecialchars($user->getPassword());
        $verif= strlen($password);
        $valid = 8;
        
        if($verif < $valid){
            
            $verif = false;
            $data = [
                'status' => 400,
                'message' => 'Le mot de passe doit faire 8 charactère minimum'
            ];
            return new JsonResponse($data, 400);
            
        }
        
        $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            $password
        ));
        
        /*Give avatar if the user don't put*/
        if(empty($user->getAvatar())){

            $user->setAvatar("uploads/images/avatars/account.png");        

        }
        else{
            
            $avatar = $user->getAvatar();
            $img = preg_replace('#^data:image/\w+;base64,#i', '', $avatar);
            $nomfichier = explode(".", $content->nameFile)  ;
            $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
            $path = 'uploads/images/avatars/'. $nomfichierUnique;
            $success = file_put_contents($path, base64_decode($img));
            
            if(isset($success)){
                $pathFileBdd = 'uploads/images/avatars/'.$nomfichierUnique;
                $user->setAvatar($pathFileBdd);
            }
            
        }

        /*push to database */
        $entityManager->persist($user);
        $entityManager->flush();
        $data = [
            'status' => 201,
            'message' => 'L\'utilisateur a bien été ajouté'
        ];
        return new JsonResponse($data, 201);
    }

    /**
     * @Route("/user/edit/{id}", name="user_edit", methods={"POST"})
     * @return Response
     */
    public function userEdit(User $user, UserRepository $userRepository, Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager)
    {
        $findUser = $userRepository->findOneBy(['id' => $this->getUser()]);
  
        if($findUser->getId() !== $user->getId()){
            $data = [
                'status' => 400,
                'message' => 'vous vous êtes perdu ?'
            ];
            return new JsonResponse($data, 400);
        }else{

            $updatedUserData = $serializer->deserialize($request->getContent(), User::class, 'json');

            $content = json_decode($request->getContent());

            //Update Username
            if(!empty($updatedUserData->getUsername())){

                $username = htmlspecialchars($updatedUserData->getUsername());
                $findUser->setUsername($username);

            }
            //Update Avatar
            if(!empty($updatedUserData->getAvatar())){

                $newAvatar = $updatedUserData->getAvatar();
                $img = str_replace('data:image/png;base64,','', $newAvatar);
                $nomfichier = explode(".", $content->nameFile)  ;
                $nomfichierUnique = $nomfichier[0].uniqid().'.'.$nomfichier[1];
                $path = 'uploads/images/avatars/'. $nomfichierUnique;
                $success = file_put_contents($path, base64_decode($img));

                if(isset($success)){

                    $findUser->setAvatar($path);
                    
                }

            }
            //Update Email
            if(!empty($updatedUserData->getEmail())){

                $email = htmlspecialchars($updatedUserData->getEmail());
                $findUser->setEmail($email);

            }
            //Update Password
            if(!empty($updatedUserData->getPassword())){

                $password = htmlspecialchars($updatedUserData->getPassword());

                if(strlen($password) < 8){
                    $data = [
                        'status' => 400,
                        'message' => 'Mot de passe trop court'
                    ];
                    return new JsonResponse($data, 400);
                }

                $findUser->setPassword($this->passwordEncoder->encodePassword(
                    $findUser,
                    $password
                )); 

            }
    
            $entityManager->persist($findUser);
            $entityManager->flush();
            
            $data = [
                'status' => 201,
                'message' => 'Votre profil a bien été mis à jour'
            ];
            return new JsonResponse($data, 201);
        }
    }
    
 
}

