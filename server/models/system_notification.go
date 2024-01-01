package models

import ()

type SystemNotification struct {
	ID uint
	SenderID uint
	ReceiverID uint
	Content string
}