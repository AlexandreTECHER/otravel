<?php

namespace App\Repository;

use App\Entity\CommentaryPicture;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CommentaryPicture|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommentaryPicture|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommentaryPicture[]    findAll()
 * @method CommentaryPicture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentaryPictureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommentaryPicture::class);
    }

    // /**
    //  * @return CommentaryPicture[] Returns an array of CommentaryPicture objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CommentaryPicture
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
