<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AdminTest extends WebTestCase
{
  
    /**
     * @dataProvider provideUrls
     */
    public function testAsAdmin($url)
    {
        $client = static::createClient([], [
            'PHP_AUTH_USER' => 'admino@test.fr',
            'PHP_AUTH_PW'   => 'nicolas77',
        ]);
        $crawler = $client->request('GET', $url);

        $this->assertResponseIsSuccessful();
    }

    /**
     * @dataProvider provideUrls
     */
    public function testAsUser($url)
    {
        $client = static::createClient([], [
            'PHP_AUTH_USER' => 'test@free.fr',
            'PHP_AUTH_PW'   => 'nicolas77',
        ]);
        $crawler = $client->request('GET', $url);

        $this->assertResponseStatusCodeSame(403);
    }

    public function provideUrls()
    {
        // On rajoute des / à la fin des routes car Symfony les fait lui-même
        // Sans les /, la réponse est une 301 (redirection)
        // Pour la dernière route, EasyAdmin redirige toujours
        // vers une route avec des paramètres en GET
        // Donc on les ajoute ici pour éviter de se voir répondre une 301 également
        return [
            ['/connect_admin']
           
        ];
    }
}

