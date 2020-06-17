<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlacePictureRepository")
 */
class PlacePicture
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("place_picture")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("place_picture")
     * @Groups("places")
     */
    private $name;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("place_picture")
     */
    private $upload_at;


    public function __construct()
    {
        $this->upload_at = new \DateTime();
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUploadAt(): ?\DateTimeInterface
    {
        return $this->upload_at;
    }

    public function setUploadAt(\DateTimeInterface $upload_at): self
    {
        $this->upload_at = $upload_at;

        return $this;
    }

}
