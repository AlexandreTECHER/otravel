<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentaryPictureRepository")
 */
class CommentaryPicture
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("commentary_picture")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("commentary_picture")
     * @Groups("commentary")
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("commentary_picture")
     */
    private $uploaded_at;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Commentary", inversedBy="CommentaryPicture")
     * @ORM\JoinColumn(onDelete="SET NULL")
     * @Groups("commentary_picture")
     */
    private $commentary;

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

    public function getUploadedAt(): ?\DateTimeInterface
    {
        return $this->uploaded_at;
    }

    public function setUploadedAt(\DateTimeInterface $uploaded_at): self
    {
        $this->uploaded_at = $uploaded_at;

        return $this;
    }

    public function getCommentary(): ?Commentary
    {
        return $this->commentary;
    }

    public function setCommentary(?Commentary $commentary): self
    {
        $this->commentary = $commentary;

        return $this;
    }
}
