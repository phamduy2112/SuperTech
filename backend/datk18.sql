-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 02, 2024 lúc 07:37 PM
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
  `banner_id` int(10) NOT NULL,
  `banner_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(10) NOT NULL,
  `category_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category_image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category_dad` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `category_date_task` datetime NOT NULL,
  `category_task` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_image`, `category_dad`, `category_date_task`, `category_task`) VALUES
(1, 'Test', 'img.png', 'ddasd', '2024-09-12 00:00:00', 123);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `chat_text` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_posts`
--

CREATE TABLE `comment_posts` (
  `comment_post_id` int(10) NOT NULL,
  `comment_content` text COLLATE utf8_unicode_ci NOT NULL,
  `comment_date` datetime NOT NULL,
  `post_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_product`
--

CREATE TABLE `comment_product` (
  `comment_id` int(10) NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_content` text COLLATE utf8_unicode_ci NOT NULL,
  `comment_star` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_product`
--

INSERT INTO `comment_product` (`comment_id`, `comment_date`, `comment_content`, `comment_star`, `product_id`, `user_id`) VALUES
(1, '2024-10-02 00:00:00', 'ádasdasdasdsadas', 2, 1, 1),
(2, '2024-10-01 17:00:00', 'ho anh em', 5, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_order`
--

CREATE TABLE `detail_order` (
  `detail_order_id` int(10) NOT NULL,
  `detail_order_quality` int(3) NOT NULL,
  `order_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `detail_order`
--

INSERT INTO `detail_order` (`detail_order_id`, `detail_order_quality`, `order_id`, `product_id`) VALUES
(1, 2, 1, 1),
(3, 2, 1, 1),
(12, 2, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `discount_id` int(10) NOT NULL,
  `discount_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `discount_percent` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `condition` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `discount_date_start` datetime NOT NULL,
  `discount_date_end` datetime NOT NULL
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
  `favorite_product_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `favorite_product`
--

INSERT INTO `favorite_product` (`favorite_product_id`, `user_id`, `product_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_product`
--

CREATE TABLE `image_product` (
  `image_id` int(10) NOT NULL,
  `image_one` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image_two` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image_three` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image_four` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `image_product`
--

INSERT INTO `image_product` (`image_id`, `image_one`, `image_two`, `image_three`, `image_four`) VALUES
(123, 'http://example.com/image1.jpg', 'http://example.com/image2.jpg', 'http://example.com/image3.jpg', 'http://example.com/image4.jpg'),
(131, 'img.pmg', 'img.pmg', 'img.pmg', 'img.pmg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `infor_product`
--

CREATE TABLE `infor_product` (
  `infor_product` int(10) NOT NULL,
  `infor_screen` int(5) NOT NULL,
  `infor_system` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `infor_cpu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `infor_ram` int(5) NOT NULL,
  `infor_storage` int(50) NOT NULL,
  `infor_more` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image_product` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `infor_product`
--

INSERT INTO `infor_product` (`infor_product`, `infor_screen`, `infor_system`, `infor_cpu`, `infor_ram`, `infor_storage`, `infor_more`, `image_product`) VALUES
(0, 0, 'Hệ điều hành', 'Thông tin CPU', 0, 0, 'Thông tin khác', 'URL hình ảnh sản phẩm'),
(12, 2, '32', '321', 23, 123, '234', '123');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `media_post`
--

CREATE TABLE `media_post` (
  `media_id` int(10) NOT NULL,
  `media_url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `post_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `media_post`
--

INSERT INTO `media_post` (`media_id`, `media_url`, `post_id`) VALUES
(1, 'ádasd', 1),
(3, 'http://example.com/image.jpg', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `order_id` int(10) NOT NULL,
  `order_date` datetime NOT NULL,
  `order_total` int(10) NOT NULL,
  `order_total_quatity` int(5) NOT NULL,
  `order_status` int(1) NOT NULL,
  `pay_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `discount` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`order_id`, `order_date`, `order_total`, `order_total_quatity`, `order_status`, `pay_id`, `user_id`, `discount`) VALUES
(1, '2024-10-22 00:00:00', 123, 23, 2, 101, 1, 123);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pay`
--

CREATE TABLE `pay` (
  `pay_id` int(10) NOT NULL,
  `payment_method` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `pay`
--

INSERT INTO `pay` (`pay_id`, `payment_method`, `user_id`) VALUES
(101, '12', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `post_id` int(10) NOT NULL,
  `post_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `post_content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `post_date` datetime NOT NULL
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
  `product_id` int(10) NOT NULL,
  `product_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `product_price` float NOT NULL,
  `product_star` int(1) NOT NULL,
  `product_discount` int(2) NOT NULL,
  `product_hot` int(10) NOT NULL,
  `product_date` date DEFAULT NULL,
  `product_quantity` int(2) NOT NULL,
  `image_id` int(10) NOT NULL,
  `infor_product` int(10) NOT NULL,
  `category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_star`, `product_discount`, `product_hot`, `product_date`, `product_quantity`, `image_id`, `infor_product`, `category_id`) VALUES
(1, 'Iphone 11', 123213, 5, 2, 1, '2024-09-13', 2, 131, 12, 1),
(2, 'Iphone 12', 123213, 5, 2, 1, '2024-09-04', 2, 131, 12, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_colors`
--

CREATE TABLE `product_colors` (
  `color_id` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `quanlity` int(11) NOT NULL,
  `image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_colors`
--

INSERT INTO `product_colors` (`color_id`, `color`, `quanlity`, `image_id`, `product_id`) VALUES
(2, 'Red', 100, 10, 5),
(3, 'Red', 100, 10, 5),
(4, 'Blue', 100, 10, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL,
  `user_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_address`, `user_phone`, `user_image`, `user_role`) VALUES
(1, 'Test', 'test@gmail.com', '1234', '123213', '0399375104', 'image1.png', 1);

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
  MODIFY `banner_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  MODIFY `comment_post_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  MODIFY `comment_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  MODIFY `detail_order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `discount_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  MODIFY `favorite_product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `media_post`
--
ALTER TABLE `media_post`
  MODIFY `media_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `pay`
--
ALTER TABLE `pay`
  MODIFY `pay_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `fk_chat_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  ADD CONSTRAINT `fk_postid_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  ADD CONSTRAINT `fk_userid_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  ADD CONSTRAINT `fk_productid_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_userid_usersdasd` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

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
  ADD CONSTRAINT `fk_proiductddd_prodyuctt` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_useriddd_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

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
  ADD CONSTRAINT `fk_payid_pay` FOREIGN KEY (`pay_id`) REFERENCES `pay` (`pay_id`),
  ADD CONSTRAINT `fk_userid_userrr` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `pay`
--
ALTER TABLE `pay`
  ADD CONSTRAINT `fk_useridd_uerrr` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_image_imageproduct` FOREIGN KEY (`image_id`) REFERENCES `image_product` (`image_id`),
  ADD CONSTRAINT `fk_infor_inforproduct` FOREIGN KEY (`infor_product`) REFERENCES `infor_product` (`infor_product`),
  ADD CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
