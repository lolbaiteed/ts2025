-- CreateTable
CREATE TABLE `users` (
    `user_key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_user_key_key`(`user_key`),
    PRIMARY KEY (`user_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `category_key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `user_ref` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `categories_category_key_key`(`category_key`),
    PRIMARY KEY (`category_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bicycles` (
    `bicycle_key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `locationX` DOUBLE NOT NULL,
    `locationY` DOUBLE NOT NULL,
    `pathToImage` VARCHAR(191) NOT NULL,
    `category_ref` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `bicycles_bicycle_key_key`(`bicycle_key`),
    PRIMARY KEY (`bicycle_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tariffs` (
    `tariff_key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `basePrice` DOUBLE NOT NULL,
    `minPrice` DOUBLE NULL,
    `maxPrice` DOUBLE NULL,
    `category_ref` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tariffs_tariff_key_key`(`tariff_key`),
    PRIMARY KEY (`tariff_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `applications` (
    `application_key` VARCHAR(191) NOT NULL,
    `category_ref` VARCHAR(191) NOT NULL,
    `user_ref` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `applications_application_key_key`(`application_key`),
    PRIMARY KEY (`application_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bookings` (
    `booking_key` VARCHAR(191) NOT NULL,
    `rating` INTEGER NULL,
    `price` DOUBLE NULL,
    `percentageOfWear` DOUBLE NULL,
    `startedAt` DATETIME(3) NOT NULL,
    `endedAt` DATETIME(3) NULL,
    `bicycle_ref` VARCHAR(191) NOT NULL,
    `tariff_ref` VARCHAR(191) NOT NULL,
    `user_ref` VARCHAR(191) NOT NULL,
    `photos` JSON NULL,

    UNIQUE INDEX `bookings_booking_key_key`(`booking_key`),
    PRIMARY KEY (`booking_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_user_ref_fkey` FOREIGN KEY (`user_ref`) REFERENCES `users`(`user_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bicycles` ADD CONSTRAINT `bicycles_category_ref_fkey` FOREIGN KEY (`category_ref`) REFERENCES `categories`(`category_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tariffs` ADD CONSTRAINT `tariffs_category_ref_fkey` FOREIGN KEY (`category_ref`) REFERENCES `categories`(`category_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_category_ref_fkey` FOREIGN KEY (`category_ref`) REFERENCES `categories`(`category_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `applications` ADD CONSTRAINT `applications_user_ref_fkey` FOREIGN KEY (`user_ref`) REFERENCES `users`(`user_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_bicycle_ref_fkey` FOREIGN KEY (`bicycle_ref`) REFERENCES `bicycles`(`bicycle_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_tariff_ref_fkey` FOREIGN KEY (`tariff_ref`) REFERENCES `tariffs`(`tariff_key`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_user_ref_fkey` FOREIGN KEY (`user_ref`) REFERENCES `users`(`user_key`) ON DELETE RESTRICT ON UPDATE CASCADE;
