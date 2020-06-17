<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{

    /**
     * @dataProvider provideUrls
     */
    
    public function testApiRoute($url)
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/');

        $this->assertResponseIsSuccessful();
        
    }

    public function provideUrls()
    {
       
        return [
            ['/api/user/'],
            ['/api/category'],
            ['/api/adress/places'],
            ['/api/places'],
            ['/api/commentary'],
            ['/api/place_picture'],
            ['/api/commentary_picture']
        ];
    }
}



