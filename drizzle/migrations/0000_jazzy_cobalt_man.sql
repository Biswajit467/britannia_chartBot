CREATE TABLE `maintenance_schedules` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(1024),
	`frequency` varchar(255) NOT NULL,
	`priority` varchar(255) NOT NULL,
	`steps` json NOT NULL,
	`estimated_duration` int,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `maintenance_schedules_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `support_interactions` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_message` varchar(1024) NOT NULL,
	`ai_response` varchar(2048) NOT NULL,
	`issue_type` varchar(255),
	`resolved` boolean DEFAULT false,
	`language` varchar(10) DEFAULT 'en-US',
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `support_interactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team_members` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`role` varchar(255) NOT NULL,
	`phone` varchar(15) NOT NULL,
	`email` varchar(255),
	`languages` json NOT NULL,
	`specialties` json NOT NULL,
	`is_active` boolean DEFAULT true,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `team_members_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `troubleshooting_issues` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`type` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` varchar(1024),
	`steps` json NOT NULL,
	`keywords` json NOT NULL,
	`created_at` datetime DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `troubleshooting_issues_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`)
);
