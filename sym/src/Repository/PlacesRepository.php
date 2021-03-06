<?php

namespace App\Repository;

use App\Entity\Places;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Places|null find($id, $lockMode = null, $lockVersion = null)
 * @method Places|null findOneBy(array $criteria, array $orderBy = null)
 * @method Places[]    findAll()
 * @method Places[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlacesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Places::class);
    }

    // /**
    //  * @return Places[] Returns an array of Places objects
    //  */
    public function placesByCategory($value)
    {
        // SELECT * FROM `places` INNER JOIN `places_category` ON `places`.`id` = `places_category`.`places_id` = 1

        return $this->createQueryBuilder('p')
            ->join('p.Category', 'c')
            ->where('c.id = ' . $value)
            ->getQuery()
            ->getResult()
        ;
    }

    
    /*
    public function findOneBySomeField($value): ?Places
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
