<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentaryRepository")
 */
class Commentary
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("commentary") 
     * @Groups("places") 
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     * @Groups("commentary")
     * @groups("user")
     * @Groups("commentary_picture")
     * @Groups("places")
     */
    private $text;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="Commentary")
     * @ORM\JoinColumn(onDelete="SET NULL")
     * @Groups("commentary")
     * @Groups("places")
     */
    private $user;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("commentary")
     * @Groups("places")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("places")
     */
    private $updated_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CommentaryPicture", mappedBy="commentary", orphanRemoval=true)
     * @Groups("commentary")
     * @Groups("places")
     */
    private $CommentaryPicture;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Places", inversedBy="commentary")
     * @ORM\JoinColumn(nullable=false)
     */
    private $places;

    public function __construct()
    {
        $this->CommentaryPicture = new ArrayCollection();
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|CommentaryPicture[]
     */
    public function getCommentaryPicture(): Collection
    {
        return $this->CommentaryPicture;
    }

    public function addCommentaryPicture(CommentaryPicture $commentaryPicture): self
    {
        if (!$this->CommentaryPicture->contains($commentaryPicture)) {
            $this->CommentaryPicture[] = $commentaryPicture;
            $commentaryPicture->setCommentary($this);
        }

        return $this;
    }

    public function removeCommentaryPicture(CommentaryPicture $commentaryPicture): self
    {
        if ($this->CommentaryPicture->contains($commentaryPicture)) {
            $this->CommentaryPicture->removeElement($commentaryPicture);
            // set the owning side to null (unless already changed)
            if ($commentaryPicture->getCommentary() === $this) {
                $commentaryPicture->setCommentary(null);
            }
        }

        return $this;
    }

    public function getPlaces(): ?Places
    {
        return $this->places;
    }

    public function setPlaces(?Places $places): self
    {
        $this->places = $places;

        return $this;
    }
}
