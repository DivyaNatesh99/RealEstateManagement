package com.Manager.Entity;

public class CustomerDTO {
	
	private String cId;
	private String cName;
	private String cAddress;
	private String cEmail;
	private String cNumber;
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
	}
	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public String getcAddress() {
		return cAddress;
	}
	public void setcAddress(String cAddress) {
		this.cAddress = cAddress;
	}
	public String getcEmail() {
		return cEmail;
	}
	public void setcEmail(String cEmail) {
		this.cEmail = cEmail;
	}
	public String getcNumber() {
		return cNumber;
	}
	public void setcNumber(String cNumber) {
		this.cNumber = cNumber;
	}
	public CustomerDTO(String cId, String cName, String cAddress, String cEmail, String cNumber) {
		super();
		this.cId = cId;
		this.cName = cName;
		this.cAddress = cAddress;
		this.cEmail = cEmail;
		this.cNumber = cNumber;
	}
	public CustomerDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
