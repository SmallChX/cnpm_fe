package models

type Activity struct {
	ID             uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Name           string `json:"name"`
	Benefit        string `json:"benefit"`
	Location       string `json:"location"`
	Day            string `json:"day"`
	Time           string `json:"time"`
	Mode           string `json:"mode"`
	NumberOfPeople int    `json:"numberOfPeople"`
	CurrentNumber  int    `json:"currentNumber"`
	Target         string `json:"target"`
	Description    string `json:"description"`
	Criteria       string `json:"criteria"`
	Status         string
	ManagerID      uint         `json:"managerID"`
	ManagerName    string       `json:"managerName"`
	Manager        UserInfo     `json:"manager" gorm:"foreignKey:ManagerID"`
	ContactInfo    string       `json:"contact"`
	Attendances    []Attendance `json:"attendances" gorm:"foreignKey:ActivityID"`
}
