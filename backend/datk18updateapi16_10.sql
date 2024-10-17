-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 16, 2024 lúc 06:33 PM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `datk18`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_dad` int(10) DEFAULT NULL,
  `category_date_task` datetime DEFAULT NULL,
  `category_task` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_image`, `category_dad`, `category_date_task`, `category_task`) VALUES
(1, 'Iphone', 'img.png', 1, '2024-09-12 00:00:00', 123),
(2, 'iPhone 14', 'iphone14.jpg', 1, '2024-10-16 16:48:47', 1),
(3, 'Samsung Galaxy S21', 'samsung21.jpg', 1, '2024-10-16 16:48:47', 1),
(4, 'MacBook Pro', 'macbook_pro.jpg', 2, '2024-10-16 16:48:47', 1),
(5, 'Dell XPS 13', 'dell_xps13.jpg', 2, '2024-10-16 16:48:47', 1),
(6, 'Bàn phím cơ', 'ban_phim_co.jpg', 3, '2024-10-16 16:48:47', 1),
(7, 'Bàn phím không dây', 'ban_phim_khong_day.jpg', 3, '2024-10-16 16:48:47', 1),
(8, 'Sạc dự phòng 10000mAh', 'sac_du_phong_10000.jpg', 4, '2024-10-16 16:48:47', 1),
(9, 'Sạc dự phòng 20000mAh', 'sac_du_phong_20000.jpg', 4, '2024-10-16 16:48:47', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `chat_text` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chat`
--

INSERT INTO `chat` (`chat_id`, `chat_text`, `user_id`) VALUES
(2, 'ho anh em', 2),
(13, 'ho anh em', 2),
(14, 'ho anh em', 2),
(16, 'ho anh em', 2),
(17, 'ho anh em', 2),
(18, 'ho anh em', 2),
(19, 'ho anh em', 2),
(20, 'ho anh em', 2),
(21, 'ho anh em', 2),
(22, 'ho anh em', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `code`
--

CREATE TABLE `code` (
  `code_id` int(11) NOT NULL,
  `code` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_posts`
--

CREATE TABLE `comment_posts` (
  `comment_post_id` int(11) NOT NULL,
  `comment_content` text COLLATE utf8_unicode_ci NOT NULL,
  `comment_date` datetime NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_product`
--

CREATE TABLE `comment_product` (
  `comment_id` int(11) NOT NULL,
  `comment_date` datetime DEFAULT NULL,
  `comment_content` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment_star` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_order`
--

CREATE TABLE `detail_order` (
  `detail_order_id` int(11) NOT NULL,
  `detail_order_quality` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `discount_id` int(11) NOT NULL,
  `discount_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `discount_percent` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `condition` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `discount_date_start` datetime DEFAULT NULL,
  `discount_date_end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discount`
--

INSERT INTO `discount` (`discount_id`, `discount_name`, `discount_percent`, `condition`, `discount_date_start`, `discount_date_end`) VALUES
(123, '23dasd', '12312', '123123', '2024-10-10 00:00:00', '2024-10-17 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite_product`
--

CREATE TABLE `favorite_product` (
  `favorite_product_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_product`
--

CREATE TABLE `image_product` (
  `image_id` int(11) NOT NULL,
  `image_one` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_two` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_three` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_four` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `infor_product`
--

CREATE TABLE `infor_product` (
  `infor_product` int(11) NOT NULL,
  `infor_screen` int(11) DEFAULT NULL,
  `infor_system` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `infor_cpu` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `infor_ram` int(11) DEFAULT NULL,
  `infor_storage` int(11) DEFAULT NULL,
  `infor_more` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_product` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `infor_product`
--

INSERT INTO `infor_product` (`infor_product`, `infor_screen`, `infor_system`, `infor_cpu`, `infor_ram`, `infor_storage`, `infor_more`, `image_product`) VALUES
(1, 0, 'Hệ điều hành', 'Thông tin CPU', 0, 0, 'Thông tin khác', 'URL hình ảnh sản phẩm'),
(12, 2, '32', '321', 23, 123, '234', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `media_post`
--

CREATE TABLE `media_post` (
  `media_id` int(11) NOT NULL,
  `media_url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `order_total` int(11) DEFAULT NULL,
  `order_total_quatity` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `pay_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pay`
--

CREATE TABLE `pay` (
  `pay_id` int(11) NOT NULL,
  `payment_method` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_content` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `posts`
--

INSERT INTO `posts` (`post_id`, `post_title`, `post_content`, `post_date`) VALUES
(1, 'Tiêu đề bài viết', 'Nội dung của bài viết ở đây.', '2023-10-04 14:53:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_star` int(11) DEFAULT NULL,
  `product_discount` int(11) DEFAULT NULL,
  `product_hot` int(11) DEFAULT NULL,
  `product_date` date DEFAULT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `infor_product` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_star`, `product_discount`, `product_hot`, `product_date`, `product_quantity`, `image_id`, `infor_product`, `category_id`) VALUES
(2, 'Iphone 12', 123213, 5, 2, 1, '2024-09-04', 2, 131, 12, 1),
(3, 'Sản phẩm 1', 150, 5, 0, 1, '2024-10-16', 50, 131, 12, 1),
(4, 'Sản phẩm 2', 200, 4, 10, 0, '2024-10-16', 30, 131, 12, 2),
(5, 'Sản phẩm 3', 250, 3, 5, 1, '2024-10-16', 20, 131, 12, 1),
(6, 'Sản phẩm 4', 300, 5, 15, 0, '2024-10-16', 10, 131, 12, 2),
(7, 'Sản phẩm 5', 350, 2, 0, 1, '2024-10-16', 25, 131, 12, 3),
(8, 'Sản phẩm 6', 400, 4, 20, 0, '2024-10-16', 15, 131, 12, 1),
(9, 'Sản phẩm 7', 450, 3, 5, 1, '2024-10-16', 5, 131, 12, 2),
(10, 'Sản phẩm 8', 500, 5, 10, 0, '2024-10-16', 12, 131, 12, 3),
(11, 'Sản phẩm 9', 550, 2, 15, 1, '2024-10-16', 18, 131, 12, 2),
(12, 'Sản phẩm 10', 600, 4, 20, 0, '2024-10-16', 20, 131, 12, 1),
(13, 'Sản phẩm 11', 650, 3, 0, 1, '2024-10-16', 22, 131, 12, 3),
(14, 'Sản phẩm 12', 700, 4, 10, 0, '2024-10-16', 10, 131, 12, 2),
(15, 'Sản phẩm 13', 750, 5, 5, 1, '2024-10-16', 30, 131, 12, 1),
(16, 'Sản phẩm 14', 800, 2, 15, 0, '2024-10-16', 8, 131, 12, 2),
(17, 'Sản phẩm 15', 850, 3, 0, 1, '2024-10-16', 20, 131, 12, 3),
(18, 'Sản phẩm 16', 900, 4, 20, 0, '2024-10-16', 15, 131, 12, 1),
(19, 'Sản phẩm 17', 950, 3, 5, 1, '2024-10-16', 25, 131, 12, 2),
(20, 'Sản phẩm 18', 1000, 5, 10, 0, '2024-10-16', 30, 131, 12, 3),
(21, 'Sản phẩm 19', 1050, 2, 15, 1, '2024-10-16', 18, 131, 12, 2),
(22, 'Sản phẩm 20', 1100, 4, 20, 0, '2024-10-16', 22, 131, 12, 1),
(23, 'Sản phẩm 21', 1150, 3, 0, 1, '2024-10-16', 18, 131, 12, 3),
(24, 'Sản phẩm 22', 1200, 4, 10, 0, '2024-10-16', 25, 131, 12, 2),
(25, 'Sản phẩm 23', 1250, 5, 5, 1, '2024-10-16', 30, 131, 12, 1),
(26, 'Sản phẩm 24', 1300, 2, 15, 0, '2024-10-16', 10, 131, 12, 2),
(27, 'Sản phẩm 25', 1350, 3, 0, 1, '2024-10-16', 50, 131, 12, 3),
(28, 'Sản phẩm 26', 1400, 4, 20, 0, '2024-10-16', 15, 131, 12, 1),
(29, 'Sản phẩm 27', 1450, 3, 5, 1, '2024-10-16', 22, 131, 12, 2),
(30, 'Sản phẩm 28', 1500, 5, 10, 0, '2024-10-16', 30, 131, 12, 3),
(31, 'Sản phẩm 29', 1550, 2, 15, 1, '2024-10-16', 18, 131, 12, 2),
(32, 'Sản phẩm 30', 1600, 4, 20, 0, '2024-10-16', 12, 131, 12, 1),
(33, 'Sản phẩm 31', 1650, 3, 0, 1, '2024-10-16', 8, 131, 12, 3),
(34, 'Sản phẩm 32', 1700, 4, 10, 0, '2024-10-16', 25, 131, 12, 2),
(35, 'Sản phẩm 33', 1750, 5, 5, 1, '2024-10-16', 30, 131, 12, 1),
(36, 'Sản phẩm 34', 1800, 2, 15, 0, '2024-10-16', 10, 131, 12, 2),
(37, 'Sản phẩm 35', 1850, 3, 0, 1, '2024-10-16', 50, 131, 12, 3),
(38, 'Sản phẩm 36', 1900, 4, 20, 0, '2024-10-16', 15, 131, 12, 1),
(39, 'Sản phẩm 37', 1950, 3, 5, 1, '2024-10-16', 22, 131, 12, 2),
(40, 'Sản phẩm 38', 2000, 5, 10, 0, '2024-10-16', 30, 131, 12, 3),
(41, 'Sản phẩm 39', 2050, 2, 15, 1, '2024-10-16', 18, 131, 12, 2),
(42, 'Sản phẩm 40', 2100, 4, 20, 0, '2024-10-16', 22, 131, 12, 1),
(43, 'Sản phẩm 41', 2150, 3, 0, 1, '2024-10-16', 18, 131, 12, 3),
(44, 'Sản phẩm 42', 2200, 4, 10, 0, '2024-10-16', 25, 131, 12, 2),
(45, 'Sản phẩm 43', 2250, 5, 5, 1, '2024-10-16', 30, 131, 12, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_colors`
--

CREATE TABLE `product_colors` (
  `color_id` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quality` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_address` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_phone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_image` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_role` tinyint(1) DEFAULT NULL,
  `user_gender` tinyint(1) DEFAULT NULL,
  `user_birth` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_address`, `user_phone`, `user_image`, `user_role`, `user_gender`, `user_birth`, `user_time`) VALUES
(2, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(3, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(4, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(5, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(6, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(7, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(8, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(9, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(10, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(11, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(12, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(13, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL),
(14, '123213', 'ho anh em', '234324324', '123123123', '0399375104', '1', 1, NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`),
  ADD KEY `fk_chat_product` (`user_id`);

--
-- Chỉ mục cho bảng `code`
--
ALTER TABLE `code`
  ADD PRIMARY KEY (`code_id`),
  ADD KEY `fk_code_userid` (`user_id`);

--
-- Chỉ mục cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  ADD PRIMARY KEY (`comment_post_id`),
  ADD KEY `fk_postid_post` (`post_id`),
  ADD KEY `fk_userid_user` (`user_id`);

--
-- Chỉ mục cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `fk_productid_product` (`product_id`),
  ADD KEY `fk_userid_usersdasd` (`user_id`);

--
-- Chỉ mục cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  ADD PRIMARY KEY (`detail_order_id`),
  ADD KEY `fk_detailorder_order` (`order_id`),
  ADD KEY `fk_productidr_producttt` (`product_id`);

--
-- Chỉ mục cho bảng `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`discount_id`);

--
-- Chỉ mục cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD UNIQUE KEY `favorite_product_id` (`favorite_product_id`),
  ADD KEY `fk_useriddd_user` (`user_id`),
  ADD KEY `fk_proiductddd_prodyuctt` (`product_id`);

--
-- Chỉ mục cho bảng `image_product`
--
ALTER TABLE `image_product`
  ADD PRIMARY KEY (`image_id`);

--
-- Chỉ mục cho bảng `infor_product`
--
ALTER TABLE `infor_product`
  ADD PRIMARY KEY (`infor_product`);

--
-- Chỉ mục cho bảng `media_post`
--
ALTER TABLE `media_post`
  ADD PRIMARY KEY (`media_id`),
  ADD KEY `fk_postiddd_posts` (`post_id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_payid_pay` (`pay_id`),
  ADD KEY `fk_userid_userrr` (`user_id`),
  ADD KEY `fk_discountid_discount` (`discount`);

--
-- Chỉ mục cho bảng `pay`
--
ALTER TABLE `pay`
  ADD PRIMARY KEY (`pay_id`),
  ADD KEY `fk_useridd_uerrr` (`user_id`);

--
-- Chỉ mục cho bảng `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `fk_image_imageproduct` (`image_id`),
  ADD KEY `fk_infor_inforproduct` (`infor_product`),
  ADD KEY `fk_category_id` (`category_id`);

--
-- Chỉ mục cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`color_id`),
  ADD KEY `fk_color_product` (`product_id`),
  ADD KEY `fk_color_product123` (`image_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `code`
--
ALTER TABLE `code`
  MODIFY `code_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  MODIFY `comment_post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  MODIFY `detail_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  MODIFY `favorite_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `image_product`
--
ALTER TABLE `image_product`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT cho bảng `infor_product`
--
ALTER TABLE `infor_product`
  MODIFY `infor_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `media_post`
--
ALTER TABLE `media_post`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `pay`
--
ALTER TABLE `pay`
  MODIFY `pay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `fk_chat_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `code`
--
ALTER TABLE `code`
  ADD CONSTRAINT `fk_code_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  ADD CONSTRAINT `fk_commentpost_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  ADD CONSTRAINT `fk_commentpptro_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `fk_productid_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  ADD CONSTRAINT `fk_detailorder_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`),
  ADD CONSTRAINT `fk_productidr_producttt` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD CONSTRAINT `fk_favotireproduct_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `fk_proiductddd_prodyuctt` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Các ràng buộc cho bảng `media_post`
--
ALTER TABLE `media_post`
  ADD CONSTRAINT `fk_postiddd_posts` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`);

--
-- Các ràng buộc cho bảng `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_discountid_discount` FOREIGN KEY (`discount`) REFERENCES `discount` (`discount_id`),
  ADD CONSTRAINT `fk_order_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `fk_payid_pay` FOREIGN KEY (`pay_id`) REFERENCES `pay` (`pay_id`);

--
-- Các ràng buộc cho bảng `pay`
--
ALTER TABLE `pay`
  ADD CONSTRAINT `fk_pay_userid` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category_product` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  ADD CONSTRAINT `fk_image_produ` FOREIGN KEY (`image_id`) REFERENCES `image_product` (`image_id`),
  ADD CONSTRAINT `fk_infor_inforproduct` FOREIGN KEY (`infor_product`) REFERENCES `infor_product` (`infor_product`);

--
-- Các ràng buộc cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD CONSTRAINT `fk_color_dasdasdasd` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_color_product123` FOREIGN KEY (`image_id`) REFERENCES `image_product` (`image_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
