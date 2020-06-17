<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;	
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;




/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("user")
     * @Groups("places")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("user")
     * @Groups("places")
     * @Groups("commentary")
     * @Assert\NotBlank
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("user")
     * @Groups("commentary")
     * @Groups("places")
     */
    private $avatar;
    
    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups("user")
     * @Assert\NotBlank
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email."
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups("user")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank
     * @Assert\Length(
     *     min = 8,
     *     minMessage = "Votre mot de passe doit avoir au moins {{ limit }} characteres",
     *)
     */
    private $password;


    /**
     * @ORM\Column(type="datetime")
     * @Groups("user")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("user")
     */
    private $updated_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Places", mappedBy="places")
     *@Groups("places")
     */
    private $Places;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Commentary", mappedBy="user", orphanRemoval=true)
     * @Groups("user")
     */
    private $Commentary;

    public function __construct()
    {
        $this->Places = new ArrayCollection();
        $this->Commentary = new ArrayCollection();
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
    }

    public function __toString(){
        return $this->username;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }


    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }


    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }
    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
        return $this->Places;
    }

    public function addPlace(Places $place): self
    {
        if (!$this->Places->contains($place)) {
            $this->Places[] = $place;
            $place->setUser($this);
        }

        return $this;
    }

    public function removePlace(Places $place): self
    {
        if ($this->Places->contains($place)) {
            $this->Places->removeElement($place);
            // set the owning side to null (unless already changed)
            if ($place->getUser() === $this) {
                $place->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Commentary[]
     */
    public function getCommentary(): Collection
    {
        return $this->Commentary;
    }

    public function addCommentary(Commentary $commentary): self
    {
        if (!$this->Commentary->contains($commentary)) {
            $this->Commentary[] = $commentary;
            $commentary->setUser($this);
        }

        return $this;
    }

    public function removeCommentary(Commentary $commentary): self
    {
        if ($this->Commentary->contains($commentary)) {
            $this->Commentary->removeElement($commentary);
            // set the owning side to null (unless already changed)
            if ($commentary->getUser() === $this) {
                $commentary->setUser(null);
            }
        }

        return $this;
    }
 


}
