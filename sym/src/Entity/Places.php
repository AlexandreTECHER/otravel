<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass="App\Repository\PlacesRepository")
 */
class Places
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("places")
     * @Groups("user")
     * @Groups("category")
     * @Groups("commentary")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category")
     * @Groups("places")
     * @Groups("user")
     * @Groups("place_picture")
     * @Groups("commentary")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category")
     * @Groups("places")
     * @Groups("user")
     * @Groups("commentary")
     */
    private $street;


    /**
     * @ORM\Column(type="integer", length=255)
     * @Groups("category")
     * @Groups("places")
     * @Groups("user")
     * @Groups("commentary")
     */
    private $zipcode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("category")
     * @Groups("places")
     * @Groups("user")
     * @Groups("commentary")
     */
    private $city;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="Places")
     * @ORM\JoinColumn(onDelete="SET NULL")
     * @Groups("places")
     * @Groups("category")
     * @Groups("commentary")
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Category", inversedBy="places")
     * @Groups("places")
     * @Groups("commentary")
     */
    private $Category;



    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups("category")
     * @Groups("places")
     */
    private $lng;

    /**
     * @ORM\Column(type="float", nullable=true))
     * @Groups("category")
     * @Groups("places")
     */
    private $lat;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups("category")
     * @Groups("places")
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("places")
     * @Groups("user")
     * @Groups("category")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("places")
     * 
     */
    private $updated_at;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\PlacePicture", cascade={"persist", "remove"})
     * @ORM\JoinColumn(onDelete="CASCADE")
     * @Groups("places")
     * @Groups("category")
     */
    private $places_picture;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Commentary", mappedBy="places", cascade={"persist", "remove"})
     * @Groups("places")
     */
    private $commentary;

    public function __construct()
    {
        $this->Category = new ArrayCollection();
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
        $this->commentary = new ArrayCollection();
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

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

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
     * @return Collection|Category[]
     */
    public function getCategory(): Collection
    {
        return $this->Category;
    }

    public function addCategory(Category $category): self
    {
        if (!$this->Category->contains($category)) {
            $this->Category[] = $category;
        }

        return $this;
    }

    public function removeCategory(Category $category): self
    {
        if ($this->Category->contains($category)) {
            $this->Category->removeElement($category);
        }

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getZipcode(): ?string
    {
        return $this->zipcode;
    }

    public function setZipcode(string $zipcode): self
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPlacesPicture(): ?PlacePicture
    {
        return $this->places_picture;
    }

    public function setPlacesPicture(?PlacePicture $places_picture): self
    {
        $this->places_picture = $places_picture;

        return $this;
    }

    /**
     * @return Collection|Commentary[]
     */
    public function getCommentary(): Collection
    {
        return $this->commentary;
    }

    public function addCommentary(Commentary $commentary): self
    {
        if (!$this->commentary->contains($commentary)) {
            $this->commentary[] = $commentary;
            $commentary->setPlaces($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->commentary->contains($commentary)) {
            $this->commentary->removeElement($commentary);
            // set the owning side to null (unless already changed)
            if ($commentary->getPlaces() === $this) {
                $commentary->setPlaces(null);
            }
        }

        return $this;
    }
}
