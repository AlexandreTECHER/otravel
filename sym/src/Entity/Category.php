<?php

namespace App\Entity;

use App\Entity\Places;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category 
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("category")     
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category") 
     * @Groups("places")
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Places", mappedBy="Category")
     * @Groups("category") 
     */
    private $places;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("category") 
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updated_at;

    public function __construct()
    {
        $this->places = new ArrayCollection();
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
 

    /**
     * @return Collection|Places[]
     */
    public function getPlaces(): Collection
    {
        return $this->places;
    }

    public function addPlace(Places $place): self
    {
        if (!$this->places->contains($place)) {
            $this->places[] = $place;
            $place->addCategory($this);
        }

        return $this;
    }

    public function removePlace(Places $place): self
    {
        if ($this->places->contains($place)) {
            $this->places->removeElement($place);
            $place->removeCategory($this);
        }

        return $this;
    }
}
