SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE DATABASE `pangolin_clothing` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `pangolin_clothing`;

-- 會員
CREATE TABLE member (
mem_id int unsigned NOT NULL AUTO_INCREMENT COMMENT '會員編號', 
mem_name varchar(100) NOT NULL DEFAULT '' COMMENT '名字', 
mem_mob varchar(10) NOT NULL DEFAULT '' COMMENT '手機', 
mem_add varchar(300) NOT NULL DEFAULT '' COMMENT '地址', 
mem_account varchar(100) NOT NULL DEFAULT '' COMMENT 'Email / 帳號', 
mem_psw varchar(20) NOT NULL DEFAULT '' COMMENT '密碼', 
mem_validation tinyint NOT NULL DEFAULT '0' COMMENT 'email驗證(0:未驗證,1:已驗證)', 
mem_state tinyint NOT NULL DEFAULT '0' COMMENT '會員狀態(0:正常,1:黑名單)', 
PRIMARY KEY (`mem_id`), 
KEY dx_mem_name (`mem_name`), 
KEY dx_mem_mob (`mem_mob`), 
KEY dx_mem_account (`mem_account`), 
KEY dx_mem_psw (`mem_psw`), 
KEY dx_mem_add (`mem_add`), 
KEY dx_mem_validation (`mem_validation`),
KEY dx_mem_state (`mem_state`)
) ENGINE=InnoDB AUTO_INCREMENT=01001 DEFAULT CHARSET=utf8mb4 COMMENT='會員表';
INSERT INTO `tibamefe_cgd103g1`.`member` (`mem_name`, `mem_mob`, `mem_add`, `mem_account`, `mem_psw`, `mem_validation`, `mem_state`) VALUES 
('Charmy', '0000000000', 'XX市XX路XX號', 'charmy000@gmail.com', 'charmy000', '1', '1');
