<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200426132000 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE place_picture (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, upload_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentary (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, places_id INT NOT NULL, text LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_1CAC12CAA76ED395 (user_id), INDEX IDX_1CAC12CA8317B347 (places_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE places (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, places_picture_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, zipcode INT NOT NULL, city VARCHAR(255) NOT NULL, lng DOUBLE PRECISION DEFAULT NULL, lat DOUBLE PRECISION DEFAULT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_FEAF6C55A76ED395 (user_id), UNIQUE INDEX UNIQ_FEAF6C559EC0931A (places_picture_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE places_category (places_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_97636828317B347 (places_id), INDEX IDX_976368212469DE2 (category_id), PRIMARY KEY(places_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentary_picture (id INT AUTO_INCREMENT NOT NULL, commentary_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, uploaded_at DATETIME NOT NULL, INDEX IDX_B27AD3FA5DED49AA (commentary_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CAA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE commentary ADD CONSTRAINT FK_1CAC12CA8317B347 FOREIGN KEY (places_id) REFERENCES places (id)');
        $this->addSql('ALTER TABLE places ADD CONSTRAINT FK_FEAF6C55A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE places ADD CONSTRAINT FK_FEAF6C559EC0931A FOREIGN KEY (places_picture_id) REFERENCES place_picture (id)');
        $this->addSql('ALTER TABLE places_category ADD CONSTRAINT FK_97636828317B347 FOREIGN KEY (places_id) REFERENCES places (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE places_category ADD CONSTRAINT FK_976368212469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE commentary_picture ADD CONSTRAINT FK_B27AD3FA5DED49AA FOREIGN KEY (commentary_id) REFERENCES commentary (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE commentary DROP FOREIGN KEY FK_1CAC12CAA76ED395');
        $this->addSql('ALTER TABLE places DROP FOREIGN KEY FK_FEAF6C55A76ED395');
        $this->addSql('ALTER TABLE places_category DROP FOREIGN KEY FK_976368212469DE2');
        $this->addSql('ALTER TABLE places DROP FOREIGN KEY FK_FEAF6C559EC0931A');
        $this->addSql('ALTER TABLE commentary_picture DROP FOREIGN KEY FK_B27AD3FA5DED49AA');
        $this->addSql('ALTER TABLE commentary DROP FOREIGN KEY FK_1CAC12CA8317B347');
        $this->addSql('ALTER TABLE places_category DROP FOREIGN KEY FK_97636828317B347');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE place_picture');
        $this->addSql('DROP TABLE commentary');
        $this->addSql('DROP TABLE places');
        $this->addSql('DROP TABLE places_category');
        $this->addSql('DROP TABLE commentary_picture');
    }
}
