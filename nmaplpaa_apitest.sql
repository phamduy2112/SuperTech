-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th10 12, 2024 lúc 09:21 PM
-- Phiên bản máy phục vụ: 10.6.17-MariaDB-cll-lve-log
-- Phiên bản PHP: 8.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nmaplpaa_apitest`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bank`
--

CREATE TABLE `bank` (
  `id_bank` int(11) NOT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `accountName` text DEFAULT NULL,
  `accountNumber` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_name` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) DEFAULT NULL,
  `category_image` varchar(50) DEFAULT NULL,
  `category_dad` int(10) DEFAULT NULL,
  `category_date_task` datetime DEFAULT NULL,
  `category_task` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_image`, `category_dad`, `category_date_task`, `category_task`) VALUES
(1, 'Iphone', 'img.png', 1, '2024-09-12 00:00:00', 1),
(2, 'SamSung', NULL, 1, NULL, 1),
(3, 'Asus', NULL, 2, NULL, 1),
(4, 'Hp', NULL, 2, NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(11) NOT NULL,
  `chat_text` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `code`
--

CREATE TABLE `code` (
  `code_id` int(11) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_posts`
--

CREATE TABLE `comment_posts` (
  `comment_post_id` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `comment_date` datetime NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment_product`
--

CREATE TABLE `comment_product` (
  `comment_id` int(11) NOT NULL,
  `comment_date` datetime DEFAULT NULL,
  `comment_content` text DEFAULT NULL,
  `comment_star` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `comment_product`
--

INSERT INTO `comment_product` (`comment_id`, `comment_date`, `comment_content`, `comment_star`, `product_id`, `user_id`) VALUES
(5, '2024-11-06 03:05:16', 'duy2qasd', 3, 3, 2),
(7, '2024-11-06 07:02:59', 'duy', 4, 5, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_order`
--

CREATE TABLE `detail_order` (
  `detail_order_id` int(11) NOT NULL,
  `detail_order_quality` int(11) DEFAULT NULL,
  `detail_order_price` float DEFAULT NULL,
  `discount_product` float DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `detail_order`
--

INSERT INTO `detail_order` (`detail_order_id`, `detail_order_quality`, `detail_order_price`, `discount_product`, `order_id`, `product_id`) VALUES
(16, 1, 19000000, 5, 38, 6),
(17, 1, 10000000, 10, 39, 7),
(18, 1, 19000000, 5, 40, 6),
(19, 1, 7000000, 0, 41, 5),
(20, 1, 7000000, 0, 42, 5),
(21, 1, 7000000, 0, 43, 5),
(22, 1, 7000000, 0, 44, 5),
(23, 1, 15000000, 15, 45, 8),
(24, 2, 30000000, 10, 45, 29),
(25, 1, 25000000, 10, 45, 20),
(26, 2, 39000000, 5, 46, 16);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount`
--

CREATE TABLE `discount` (
  `discount_id` int(11) NOT NULL,
  `discount_name` varchar(50) DEFAULT NULL,
  `discount_percent` varchar(50) DEFAULT NULL,
  `condition` varchar(50) DEFAULT NULL,
  `discount_date_start` datetime DEFAULT NULL,
  `discount_date_end` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `discount`
--

INSERT INTO `discount` (`discount_id`, `discount_name`, `discount_percent`, `condition`, `discount_date_start`, `discount_date_end`) VALUES
(1, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `favorite_product`
--

CREATE TABLE `favorite_product` (
  `favorite_product_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_product`
--

CREATE TABLE `image_product` (
  `image_id` int(11) NOT NULL,
  `image_one` varchar(50) DEFAULT NULL,
  `image_two` varchar(50) DEFAULT NULL,
  `image_three` varchar(50) DEFAULT NULL,
  `image_four` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `image_product`
--

INSERT INTO `image_product` (`image_id`, `image_one`, `image_two`, `image_three`, `image_four`) VALUES
(1, 'oswsbrpihzpiruyr6mal', 'wtagy458saffcstgynoa', 'aq9rewyaqgjghsllpyiy', 'wsis4wsc1tdjxuzwa77q'),
(2, 'kkshwbuoswnfcxck34af', 'etvcq3cpar9xlsaqbns9', 'y80rmuqz7uzvbibv2sul', 'ght6amc6fnaklfrfufk2'),
(3, 'bimnhlhkfknja1jepqnz', 'py1f8a9se1yzlm6fxzju', 'konprmom09syxq0ygan6', 'vqbm6hcbuv7ykhqi2pgo'),
(4, 'vlwcfj4sxpzp9umd1kf2', 'rqqzxw9scxggbijgonnu', 'lmmwkqxivj4azc1id3ze', 'qigzjady47ganzxd2mqb'),
(5, 'sfjoriqc2ctschvzpwww', 'kqyjvuybzrmgzrmukhpy', 'bgjpsl5d1srupilvqo0m', 'u8tnhlaqnyr5mvhkojxv'),
(6, 'c9tcnk5hgvqg4pw5g11f', 'rh61cwhsdsialohipfxu', 'vp5pckjubyaajkow1dur', 'bap3dq0fhn6so8ocknaq'),
(7, 'beposp0axnqfxaqcuswn', 'oj3ef9bffona2sowa4vv', 'juzrjni7coyddahit0rq', 'bpv1kt9hgfovbe1s9e4a'),
(8, 'txrsak2jd53hqhj3md5a', 'efem35n1orjhhof99fb3', 'yiqzjukwip6wwhgdnoes', 'yyoksf8leazgm6ducjeo'),
(9, 'mqvv3mduhuzmn13lpjvl', 'v9ujujyow3mtc6v4hlsu', 'l7hqbpgdyizp6xshizjs', 'xtzhfc0jk90fgdo4aoqm'),
(10, 'gdhp8tmdbmlhsth5kkit', 'pdk27wixnz6ao4fzna3m', 'rxxz0pucgt203lm1hmiq', 'jcm7b56qs5qp39strsq7'),
(11, 'eyrdgw5b00djfysiq4tx', 'tfa20bqgbbhx9ht8dt7e', 'yakv0mhhjr5hgbgpgxpk', 'tueozljlgjxurqjrzhv2'),
(12, 'haulaspzwlvjzuvzdcyf', 'n5ukdvg2gjv85qr5cq5o', 'nzszpv28alnsgwxd8suc', 'ouodpzng5um3fvoqbrkn'),
(13, 'nkebhjqndmo6ikw1i9a6', 'kuom3elp7snknxoegrow', 'sgwvmdlk5qm7ozq8xhyy', 'abe8da5c7isorhbi0dd5'),
(14, 'qxlrm9jymxq8bscvw3ol', 'pio6fexyu6mkb45glhlz', 'udipshenzpwaltnu7jvn', 'rymv5j7oddgvfkuhviet'),
(15, 'tajsvfdcudfqvrc5sk2o', 'mwi1po7jykpjc0d1psi7', 'tfibyr3yi9gtsyybv39f', 'sm959dwreddjqo0mxor2'),
(16, 'c9npm0ehxxncakzbadl7', 'qb96q7q93vru65nl40dz', 'su0a7hyftfnfbekdt9zz', 'gea4f0gccblgooyv8mdb'),
(17, 'qfxsptms9cwvyhhkeqe9', 'hcbow20qt9l5cojd5sb3', 'gbmji8yvfgiou4fqo317', 'i2plsf0mzqrq7jdlhyhr'),
(18, 'qdbbz3ljqvoacbreceen', 'yxq9lxqoxkhkf25j2yv4', 'uwjcrd4ozrbb2eptluay', 'i8gumqzhylux542isv34'),
(19, 'ssxb3dvz9obe8tbxxx2z', 'yxrahx07gvrs3hc7fkyj', 'uw6zthmhronfelcvvapc', 'lsyxdosdiulywmp9ib1u'),
(20, 'arakiprutggcebkwl462', NULL, NULL, NULL),
(21, 'wwvxtjuokvw0swkyqm6w', 'ulmxxaajrnmudzt5dlga', 'dyphiedyw39jggafpr6c', 'dfa76ysjlfispbpt7xvf'),
(22, 'j4gpeukid97naf5od5ls', 'qvhvdjnc1jtuvheyc4ux', 'dszae5wit0rbg2stxf1t', 'g1reuhabhl98aoxf6o7m'),
(23, 'qorcvndoruyroqqzeemh', 'ca78srervi0wpfvojuqp', 'blevzwgszdz2gcouw02m', 'muic5vrhv4ty86ygf8n7'),
(24, 'zvvj0zcmae8darokxc8r', 'siujsvmze98fkjhyt2sn', 'tp1vq7gtreqmuzxjcz3q', 'msspmeodz9ltpbrfr9lr'),
(25, 'fdjgjlvnorpirphsunb0', 'tnbr7i0bcx0u5gbydcxr', 'ilgr01q4iorlc5hhykvn', 'hu0wypbngp3mlaciihlq'),
(26, 'acxdopwjjpk3und9at8r', 'gopiklcboaewcm4lcgup', 'o8hnuselgtrvrfxkmequ', 'gunj2lk7ghtusahuerzh'),
(27, 'ohajbepyqm7bl2rhyhry', 'zszt6o7xdnzqmy3xhtee', 'i9k3ecsxo8s2ilhkd0im', 'sqnnb0spx9au07x7ta6s'),
(28, 's9z0j5kr7jwwteqdknyy', 'me7bpztdpqpgpagwipxu', 'lwzjkc1rtt7ewrtnolfr', 'mennezkdd7oqustn4rbk'),
(29, 'fu2wpdp1jmj1xokgbeqe', 'kdfw9nw0g7e1tfzfqxmq', 'tat2fercmmpeqrzthrsl', 'h64eivzcj2dcdpkmcczt'),
(30, 'rwxydauwvmqrvrx7sxjc', 'nanlm3dhgmihvi24qcln', 'b3zrttsmti05h1jvx20k', 'rdl0zrwukfdgavs6jzi2'),
(31, 'cxm57kkrh04dnmckizjq', 'cihe892ztadhlorghfvx', 't7cgsw0nelk4tasuj60q', 'adiwymddp6bomrr8naft'),
(32, 'tr0gbu2a6cqhfsytpioz', 'zyao00tbdo0os37nswlq', 'ru2djhigkwlvxtdlp5xl', 'gbjtkdumqsii8tf4t0a2'),
(33, 'txrutxooysqfwcfznmi9', 'vedg1gbn8srrlwmkosiw', 'g1zeyjwi9v1tlmvksw4w', 'cfskwxpiz5hqornopw1x'),
(34, 'adc1vqwnud070mzx7ws3', 'j6uz9pepqbj7zi7p5cdn', 'vhpb2cjdko37idyfcfxt', 'p6ikd7nqsen2ywgiirrk'),
(35, 'fwcqqjzvzd6ks71v3lsb', 'gntzcgfuyqrz05enybdr', 'znlnjrajxqwuaelfjo2j', 'ohglu1ynayschnqdneo0'),
(36, 'lsdhcyzjz7dnrjiubecp', 's9qe14kwctba8kbc4yx2', 'xzeb4bmjev1uvtii9typ', 'sdae9yhpwpbcoygxmky9'),
(37, 'nonuqcgkilks6efc2ipv', 'ymozybgyxh1jbx2zl6c0', 'rv5xwkc7ee9zg6lkxgr5', 'oa48mpa6xu66wbvgpq3c'),
(38, 'eh7d9m57ftg5teojdejx', 'nhhxbwoguynfqoly5lo1', 'ilhehtewh2bdrpir140w', 'sjs6tktzzntytf1bm7ez'),
(39, 'rxp8kttirxdfnxocgirf', 'dcoyvigbfvtjgl1nyr0i', 'qs3rua1ry4ll4ikk9p6b', 'oom4gj8naukvgmkghtmo'),
(40, 'whlnz3w2er3hwaembqmc', 'ee6tffatdzw0w0nz3vkq', 'jygcqajtx8rffyhusv0l', 'bckeasdy5i64styq7yio'),
(41, 'rqyytyv7txtqtoclhpvq', 'kkqw77umtizfyj0jqpma', 'cvm60irtj3i4txaodyxc', 'yupkx4se1jq04vordxeq'),
(42, 'fncoyxmsw7zeca8hsbs3', 'ggnosv7ronnbp82vdewz', 'wmfqxtqocklzhpkp6pqn', 'd2hqbctzawczf9hfjb3y'),
(43, 'a5owt3kzpwm24aqodbjn', 've4zondyok6xdvmme3bi', 'qnm7tqhdrggb9wewcnzq', 'm3rdb3qxmicqn0yqmd44'),
(44, 'o9jhmjdnywav8frqou1o', 'yse43mt1qns6le6luti7', 'gyjkwtiba5sakvesxt54', 'gbwex4l6nxb0ewlgyeqg'),
(45, 'imijs0pvy1lijc9uuucc', 'ygf13y1g48kcclcrm5yr', 'tu4bgbadcbgrm1kuhwy4', 'd61yxmdlsxj28fu6o4dm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `infor_product`
--

CREATE TABLE `infor_product` (
  `infor_product` int(11) NOT NULL,
  `infor_screen` int(11) DEFAULT NULL,
  `infor_system` varchar(50) DEFAULT NULL,
  `infor_cpu` varchar(50) DEFAULT NULL,
  `infor_ram` int(11) DEFAULT NULL,
  `infor_more` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `infor_product`
--

INSERT INTO `infor_product` (`infor_product`, `infor_screen`, `infor_system`, `infor_cpu`, `infor_ram`, `infor_more`) VALUES
(1, NULL, NULL, NULL, NULL, NULL),
(5, 30, '1', '3000', 5, '<p>asdasdsadasd</p>'),
(6, 30, '1', '3000', 5, '<p>asdasdsadasd</p>'),
(7, 30, '1', '3000', 5, '<p>asdasdsadasd</p>'),
(8, 30, '1', '3000', 5, '<p>asdasdsadasd</p>'),
(9, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(10, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(11, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(12, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(13, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(14, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(15, 2, '1', '2', 2, '<p>sadsadasdasd</p>'),
(17, 255, '1', '255', 255, '<p>asd</p>'),
(18, 255, '1', '255', 255, '<p>asd</p>'),
(19, 255, '1', '255', 255, '<p>asd</p>'),
(20, 255, '1', '255', 255, '<p>sdsadasd</p>'),
(21, 255, '1', '255', 255, '<p>sdsadasd</p>'),
(22, 255, '1', '255', 255, '<p>sdsadasd</p>'),
(23, 255, '2', '255', 255, '<p>sadasd</p>');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `likes`
--

CREATE TABLE `likes` (
  `like_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `replies_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `likes`
--

INSERT INTO `likes` (`like_id`, `user_id`, `post_id`, `comment_id`, `replies_id`) VALUES
(3, 2, NULL, 7, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `media_post`
--

CREATE TABLE `media_post` (
  `media_id` int(11) NOT NULL,
  `media_url` varchar(255) DEFAULT NULL,
  `post_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

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
  `discount` int(11) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`order_id`, `order_date`, `order_total`, `order_total_quatity`, `order_status`, `pay_id`, `user_id`, `discount`, `address`, `phone_number`) VALUES
(38, '2024-11-08 02:26:37', 18050000, 0, NULL, NULL, 2, NULL, 'Ha Noi Bình Ba Châu Đức Bà Rịa - Vũng Tàu', '0902926602'),
(39, '2024-11-08 02:56:07', 9000000, 0, 3, NULL, 2, NULL, 'Ha Noi  Côn Đảo Bà Rịa - Vũng Tàu', '0902926602'),
(40, '2024-11-08 11:51:39', 18050000, 0, 3, NULL, 2, NULL, 'Ha Noi  Côn Đảo Bà Rịa - Vũng Tàu', '0902926602'),
(41, '2024-11-08 14:55:56', 7000000, 0, 0, NULL, 2, NULL, 'Ha Noi   ', '0902926602'),
(42, '2024-11-08 14:58:49', 7000000, 0, 0, NULL, 2, NULL, 'Ha Noi   ', '0902926602'),
(43, '2024-11-08 15:09:34', 7000000, 0, 0, NULL, 2, NULL, 'Ha Noi   ', '0902926602'),
(44, '2024-11-08 15:32:08', 7000000, 0, 0, NULL, 2, NULL, 'Ha Noi   ', '0902926602'),
(45, '2024-11-11 13:32:45', 89250000, 0, 0, NULL, 2, NULL, 'Ha Noi   ', '0902926602'),
(46, '2024-11-11 13:36:31', 74100000, 2, 0, NULL, 2, NULL, 'Ha Noi Cù Bị Châu Đức Bà Rịa - Vũng Tàu', '0902926602');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_status`
--

CREATE TABLE `order_status` (
  `order_status_id` int(11) NOT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_status_text_cancel` varchar(100) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Đang đổ dữ liệu cho bảng `order_status`
--

INSERT INTO `order_status` (`order_status_id`, `order_status`, `order_status_text_cancel`, `order_id`, `created_at`) VALUES
(7, 0, NULL, 38, '2024-11-08 02:26:37'),
(8, 0, NULL, 39, '2024-11-08 02:56:07'),
(9, 3, '??t nh?m s?n ph?m', 39, '2024-11-08 03:09:52'),
(10, 0, NULL, 40, '2024-11-08 11:51:39'),
(11, 3, '??i ý, không mu?n mua n?a', 40, '2024-11-08 11:52:14'),
(12, 0, NULL, 41, '2024-11-08 14:55:56'),
(13, 0, NULL, 42, '2024-11-08 14:58:49'),
(14, 0, NULL, 43, '2024-11-08 15:09:34'),
(15, 0, NULL, 44, '2024-11-08 15:32:08'),
(16, 0, NULL, 45, '2024-11-11 13:32:45'),
(17, 0, NULL, 46, '2024-11-11 13:36:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pay`
--

CREATE TABLE `pay` (
  `pay_id` int(11) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `pay`
--

INSERT INTO `pay` (`pay_id`, `payment_method`, `user_id`) VALUES
(1, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(255) DEFAULT NULL,
  `post_content` longtext DEFAULT NULL,
  `post_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_star` int(11) DEFAULT NULL,
  `product_discount` int(11) DEFAULT NULL,
  `product_hot` int(11) DEFAULT NULL,
  `product_date` date NOT NULL,
  `product_quantity` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `infor_product` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_price`, `product_star`, `product_discount`, `product_hot`, `product_date`, `product_quantity`, `image_id`, `infor_product`, `category_id`) VALUES
(1, 'Product 1', 3000000, 2, 1, 1, '2024-02-02', 0, 1, 1, 1),
(3, 'Điện thoại Samsung Galaxy A16 5G 8GB256GB', 5000000, 5, 5, 1, '2024-11-05', 29, 1, 1, 2),
(4, 'Điện thoại Samsung Galaxy A16 8GB128GB', 6000000, 5, 10, 1, '2024-11-05', 20, 2, 1, 2),
(5, 'Điện thoại Samsung Galaxy A16 8GB128GB', 7000000, 5, 0, 1, '2024-11-05', 9, 3, 1, 2),
(6, 'Điện thoại Samsung Galaxy S23 Ultra 5G 8GB256GB', 19000000, 5, 5, 1, '2024-11-05', 7, 4, 1, 2),
(7, 'Điện thoại Samsung Galaxy A25 5G 8GB128GB', 10000000, 4, 10, 1, '2024-11-05', 8, 5, 1, 2),
(8, 'Điện thoại Samsung Galaxy A05s 6GB128GB', 15000000, 5, 15, 1, '2024-11-05', 9, 6, 1, 2),
(9, 'Điện thoại Samsung Galaxy A15 5G 8GB256GB', 16000000, 5, 0, 1, '2024-11-05', 10, 7, 1, 2),
(11, 'Điện thoại Samsung Galaxy S24+ 5G 12GB256GB', 19000000, 5, 20, 1, '2024-11-05', 10, 9, 1, 2),
(12, 'Điện thoại Samsung Galaxy S24 5G 8GB256GB', 29000000, 5, 5, 1, '2024-11-05', 9, 10, 1, 2),
(13, 'Điện thoại Samsung Galaxy M55 5G 12GB256GB', 18000000, 5, 5, 1, '2024-11-05', 10, 11, 1, 2),
(14, 'Điện thoại Samsung Galaxy S24 Ultra 5G 12GB256GB', 38000000, 5, 5, 1, '2024-11-05', 9, 12, 1, 2),
(15, 'Điện thoại Samsung Galaxy A35 5G 8GB256GB', 28000000, 5, 5, 0, '2024-11-05', 10, 13, 1, 2),
(16, 'Điện thoại Samsung Galaxy S23 FE 5G 8GB128GB Xanh ', 39000000, 5, 5, 1, '2024-11-05', 13, 14, 1, 2),
(17, 'Điện thoại Samsung Galaxy M54 5G 8GB256GB', 15000000, 5, 5, 1, '2024-11-05', 15, 15, 1, 2),
(18, 'Điện thoại Samsung Galaxy M35 5G 8GB256GB', 16000000, 5, 5, 1, '2024-11-05', 15, 16, 1, 2),
(19, 'Điện thoại Samsung Galaxy Z Flip6 5G 12GB256GB', 26000000, 5, 10, 1, '2024-11-05', 20, 16, 1, 2),
(20, 'Điện thoại Samsung Galaxy Z Fold6 5G 12GB256GB', 25000000, 5, 10, 1, '2024-11-05', 19, 17, 1, 2),
(21, 'Samsung Galaxy A55 5G', 5000000, 5, 5, 0, '2024-11-05', 20, 18, 1, 2),
(22, 'iPhone 16 Plus 128GB', 35000000, 5, 10, 1, '2024-11-11', 30, 32, 1, 1),
(23, 'iPhone 16 Plus 128GB', 35000000, 5, 10, 1, '2024-11-11', 30, 32, 1, 1),
(25, 'iPhone 15 Pro 256GB', 33000000, 4, 10, 1, '2024-11-11', 30, 33, 1, 1),
(26, 'iPhone 15 Plus 128GB', 33000000, 4, 10, 1, '2024-11-11', 30, 34, 1, 1),
(29, 'iPhone 15 128GB', 30000000, 5, 10, 1, '2024-11-11', 28, 35, 1, 1),
(30, 'iPhone 16', 37000000, 5, 15, 1, '2024-11-11', 35, 36, 1, 1),
(31, 'iPhone 11 64GB', 11000000, 4, 10, 1, '2024-11-11', 30, 37, 1, 1),
(32, 'iPhone 12 64GB', 15000000, 4, 10, 1, '2024-11-11', 20, 38, 1, 1),
(33, 'iPhone 13 128GB', 17000000, 5, 10, 1, '2024-11-11', 30, 39, 1, 1),
(34, 'iPhone 14', 20000000, 5, 15, 0, '2024-11-11', 15, 40, 1, 1),
(35, 'iPhone 14 128GB', 23000000, 4, 10, 1, '2024-11-11', 30, 41, 1, 1),
(36, 'iPhone 14 Plus', 25000000, 4, 10, 1, '2024-11-11', 10, 42, 1, 1),
(37, 'iPhone 15 Pro Max', 31000000, 5, 20, 1, '2024-11-11', 30, 43, 1, 1),
(38, 'iPhone 16 Pro', 35000000, 4, 10, 1, '2024-11-11', 30, 44, 1, 1),
(39, 'iPhone 16 Pro Max', 45000000, 5, 20, 1, '2024-11-11', 40, 45, 1, 1),
(44, 'duy2222', 123, 0, 10, 0, '2024-11-12', 0, NULL, 17, 2),
(45, 'duy2222', 123, 0, 10, 0, '2024-11-12', 0, NULL, 18, 2),
(46, 'duy2222', 123, 0, 10, 0, '2024-11-12', 0, NULL, 19, 2),
(47, 'asdsad123', 123, 0, 10, 0, '2024-11-12', 30, NULL, 20, 2),
(48, 'asdsad123', 123, 0, 10, 0, '2024-11-12', 30, NULL, 21, 2),
(49, 'asdsad123', 123, 0, 10, 0, '2024-11-12', 30, NULL, 22, 2),
(50, 'asdsad123', 300000, 0, 10, 0, '2024-11-12', 0, NULL, 23, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_colors`
--

CREATE TABLE `product_colors` (
  `color_id` int(11) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `quality` int(11) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_colors`
--

INSERT INTO `product_colors` (`color_id`, `color`, `quality`, `image_id`, `product_id`) VALUES
(1, 'Tím', 5, 1, 3),
(2, 'Xanh', 1, 2, 4),
(3, 'Đỏ', 4, 3, 5),
(4, 'Hồng', 2, 4, 6),
(5, 'Vàng', 5, 5, 7),
(6, 'Đen', 4, 6, 8),
(7, 'Nâu', 2, 7, 9),
(8, 'Xanh đậm', 8, 9, 11),
(9, 'Xanh lá cây', 8, 10, 12),
(10, 'Tím nhạt', 4, 11, 13),
(11, 'Tím đậm', 2, 12, 14),
(12, 'Xanh Ngọc bảo', 2, 13, 15),
(13, 'Xanh bắc tuyết', 5, 14, 16),
(14, 'Xám ánh trăng', 9, 15, 17),
(15, 'Trắng ngọc trai', 25, 16, 18),
(16, 'Xanh dương', 11, 16, 18),
(17, 'Vàng', 12, 16, 19),
(18, 'Hồng ', 12, 17, 20),
(19, 'Đen', 5, 18, 21),
(20, 'Xanh ngọc', 8, 18, 21),
(21, 'Nâu', 6, 1, 1),
(22, 'Hồng ngọc', 14, 32, 22),
(23, 'Xanh tím', 26, 32, 23),
(24, 'TÍm đậm', 75, 33, 25),
(25, 'Đỏ đậm', 32, 34, 26),
(26, 'Xanh nhặt', 42, 34, 26),
(27, 'Xanh ngọc', 43, 35, 29),
(28, 'Xanh đậm', 94, 36, 30),
(29, 'xanh nhạt', 54, 36, 30),
(30, 'Tím nhạt', 74, 37, 31),
(31, 'Xanh ngọc', 54, 38, 32),
(32, 'Xám ánh trăng', 61, 39, 33),
(33, 'Đen', 34, 40, 34),
(34, 'Hồng ', 41, 41, 35),
(35, 'Tím', 23, 42, 36),
(36, 'Tím Nhạt', 84, 43, 37),
(37, 'Xanh đậm', 122, 44, 38),
(38, 'Bạc', 84, 45, 39),
(39, '', NULL, NULL, NULL),
(40, 'Đỏ', NULL, NULL, 46),
(41, 'Den', NULL, NULL, 47),
(42, 'Den', NULL, NULL, 48),
(43, 'Den', NULL, NULL, 49),
(44, 'Den', NULL, NULL, 50);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_storage`
--

CREATE TABLE `product_storage` (
  `id_storage` int(11) NOT NULL,
  `storage` int(11) DEFAULT NULL,
  `storage_quatity` int(11) DEFAULT NULL,
  `storage_price` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_storage`
--

INSERT INTO `product_storage` (`id_storage`, `storage`, `storage_quatity`, `storage_price`, `product_id`, `color_id`) VALUES
(1, 388, 5, 15000000, 3, 1),
(2, 395, 2, 39000000, 4, 2),
(3, 129, 22, 48000000, 5, 3),
(4, 222, 5, 25000000, 6, 4),
(5, 104, 7, 12000000, 7, 5),
(6, 123, 2, 22000000, 8, 6),
(7, 194, 22, 8120000, 9, 7),
(8, 211, 22, 28000000, 11, 8),
(9, 184, 22, 11000000, 12, 9),
(10, 123, 24, 14000000, 13, 10),
(11, 145, 12, 5000000, 14, 11),
(12, 111, 54, 10000000, 15, 12),
(13, 159, 5, 15000000, 16, 13),
(14, 144, 12, 19000000, 17, 14),
(15, 124, 4, 19000000, 18, 15),
(16, 199, 44, 17000000, 19, 16),
(17, 157, 12, 30000000, 20, 17),
(18, 163, 12, 12000000, 21, 18),
(19, 123, 2, 14849999, 1, 19),
(20, NULL, NULL, NULL, NULL, 42),
(21, NULL, NULL, 0, 49, 43),
(22, 255, NULL, 300000, 50, 44);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `replies_comment_product`
--

CREATE TABLE `replies_comment_product` (
  `id` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `repiles_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_email` varchar(50) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `user_address` varchar(50) DEFAULT NULL,
  `user_phone` varchar(50) DEFAULT NULL,
  `user_image` varchar(50) DEFAULT NULL,
  `user_role` tinyint(1) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `user_gender` tinyint(1) DEFAULT NULL,
  `user_birth` varchar(100) DEFAULT NULL,
  `user_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_address`, `user_phone`, `user_image`, `user_role`, `level`, `user_gender`, `user_birth`, `user_time`) VALUES
(1, 'testapi', 'thienlegaming19942@gmail.com', '$2a$10$ktpdCBVC.wyaEz2hRdNzuudSSzoeeocVT61.7nD.9RpqK3tqvb8mu', 'HCM', '0902926602', 'ky2udz1nlmmochcx03y5', 0, 0, 1, '2004-11-05', '2024-11-06 00:00:00'),
(2, 'Vinh', 'duyp7454@gmail.com', '$2a$10$c8CGihCeEhoVs4tjfnUnWu4gf5qsJau6xsqHuqJ35.WsQROCj517.', 'Ha Noi', '0902926602', '', 1, 2, 1, '2004-11-05', '2024-11-06 00:00:00'),
(20, 'Hồ Văn Thanh', 'emailClone20@gmail.com', '$2a$10$kwYMCxTmBpa8rQcyW/8qF.soIKPExl1bxg70acMokgC8JnXozaJG6', NULL, NULL, NULL, 11, 4, NULL, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id_bank`);

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
  ADD PRIMARY KEY (`favorite_product_id`),
  ADD KEY `fk_favorite_product` (`product_id`),
  ADD KEY `fk_favorite_user` (`user_id`);

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
-- Chỉ mục cho bảng `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `fk_like_user` (`user_id`),
  ADD KEY `fk_like_post` (`post_id`),
  ADD KEY `fk_like_commentoprod` (`comment_id`),
  ADD KEY `fk_like_replies` (`replies_id`);

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
-- Chỉ mục cho bảng `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_status_id`),
  ADD KEY `fk_status_order` (`order_id`);

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
  ADD KEY `fk_infor_inforproduct` (`infor_product`),
  ADD KEY `fk_category_id` (`category_id`),
  ADD KEY `fkimage` (`image_id`);

--
-- Chỉ mục cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`color_id`),
  ADD KEY `fk_color_product` (`product_id`),
  ADD KEY `fk_color_product123` (`image_id`);

--
-- Chỉ mục cho bảng `product_storage`
--
ALTER TABLE `product_storage`
  ADD PRIMARY KEY (`id_storage`),
  ADD KEY `fk_storage_product` (`product_id`),
  ADD KEY `fk_storage_color` (`color_id`);

--
-- Chỉ mục cho bảng `replies_comment_product`
--
ALTER TABLE `replies_comment_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_commentttt_repilse` (`comment_id`),
  ADD KEY `fk_uuuserrrr_repilse` (`user_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bank`
--
ALTER TABLE `bank`
  MODIFY `id_bank` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `code`
--
ALTER TABLE `code`
  MODIFY `code_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `comment_posts`
--
ALTER TABLE `comment_posts`
  MODIFY `comment_post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `comment_product`
--
ALTER TABLE `comment_product`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `detail_order`
--
ALTER TABLE `detail_order`
  MODIFY `detail_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `discount`
--
ALTER TABLE `discount`
  MODIFY `discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `favorite_product`
--
ALTER TABLE `favorite_product`
  MODIFY `favorite_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `image_product`
--
ALTER TABLE `image_product`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `infor_product`
--
ALTER TABLE `infor_product`
  MODIFY `infor_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `media_post`
--
ALTER TABLE `media_post`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `pay`
--
ALTER TABLE `pay`
  MODIFY `pay_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT cho bảng `product_storage`
--
ALTER TABLE `product_storage`
  MODIFY `id_storage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `replies_comment_product`
--
ALTER TABLE `replies_comment_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

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
  ADD CONSTRAINT `fk_favorite_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_favorite_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Các ràng buộc cho bảng `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `fk_like_commentoprod` FOREIGN KEY (`comment_id`) REFERENCES `comment_product` (`comment_id`),
  ADD CONSTRAINT `fk_like_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  ADD CONSTRAINT `fk_like_replies` FOREIGN KEY (`replies_id`) REFERENCES `replies_comment_product` (`id`),
  ADD CONSTRAINT `fk_like_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

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
  ADD CONSTRAINT `fk_payid_pay` FOREIGN KEY (`pay_id`) REFERENCES `pay` (`pay_id`) ON DELETE SET NULL;

--
-- Các ràng buộc cho bảng `order_status`
--
ALTER TABLE `order_status`
  ADD CONSTRAINT `fk_status_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`);

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
  ADD CONSTRAINT `fk_infor_inforproduct` FOREIGN KEY (`infor_product`) REFERENCES `infor_product` (`infor_product`) ON DELETE SET NULL,
  ADD CONSTRAINT `fkimage` FOREIGN KEY (`image_id`) REFERENCES `image_product` (`image_id`);

--
-- Các ràng buộc cho bảng `product_colors`
--
ALTER TABLE `product_colors`
  ADD CONSTRAINT `fk_color_dasdasdasd` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `fk_color_product123` FOREIGN KEY (`image_id`) REFERENCES `image_product` (`image_id`);

--
-- Các ràng buộc cho bảng `product_storage`
--
ALTER TABLE `product_storage`
  ADD CONSTRAINT `fk_storage_color` FOREIGN KEY (`color_id`) REFERENCES `product_colors` (`color_id`),
  ADD CONSTRAINT `fk_storage_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
