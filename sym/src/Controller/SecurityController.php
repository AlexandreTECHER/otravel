<?php
namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class SecurityController extends AbstractController
{

    /**
     * @Route("/login", name="login", methods={"POST"})
     * @return Response
     */
    public function login(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserRepository $userRepository)
    {
        $data = json_decode($request->getContent());

        /*check connexion*/

        $user = $userRepository->checkLogin($data);            
        $errors = $validator->validate($user);
        $emailBdd = $userRepository->findOneBy(['email' => $data->email]);
        $passwordDB = $emailBdd->getPassword();
        $passwordInput = htmlspecialchars($data->password); 
        $result = password_verify($passwordInput,$passwordDB);
    
        if (count($errors)) {
            
            $errors = $serializer->serialize($errors, 'json');

            return new Response($errors, 401, [
                'Content-Type' => 'application/json'
            ]);

        }

        // Check if log or password return error;
        
        if ($result === false) {

            return new JsonResponse('mot de passe ou email incorrect', 401, [
                'Content-Type' => 'application/json'
            ]);

        } else {

            return $this->json($emailBdd);

        }

    }

    /**
     * @Route("/api/isLogged", name="is_logged", methods={"POST"}))
     */
    public function isLogged(SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $avatar = $user->getAvatar();
        
        $user->setAvatar($avatar);
        $data = $serializer->normalize($user, null, ['groups' => 'places']);

        return $this->json($data);

    }
    
    /**
     * @Route("/connect_admin", name="app_login")
     */
    public function loginAdmin(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {

            return $this->redirectToRoute('target_path');

        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout", methods={"POST"})
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }

    /**
    * @Route("/", name="api")
    */
    public function browse()
    {
        return $this->json('coucou');
    }

}