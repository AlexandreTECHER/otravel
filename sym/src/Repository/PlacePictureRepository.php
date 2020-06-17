<?php

namespace App\Repository;

use App\Entity\PlacePicture;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PlacePicture|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlacePicture|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlacePicture[]    findAll()
 * @method PlacePicture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlacePictureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlacePicture::class);
    }

    // /**
    //  * @return PlacePicture[] Returns an array of PlacePicture objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PlacePicture
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
