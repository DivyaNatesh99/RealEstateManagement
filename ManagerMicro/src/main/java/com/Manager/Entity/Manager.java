package com.Manager.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Manager {
	
	
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String eName;
	private String eCNumber;
	private String eLocality;
	private String eEmail;
	public String geteName() {
		return eName;
	}
	public void seteName(String eName) {
		this.eName = eName;
	}
	public String geteCNumber() {
		return eCNumber;
	}
	public void seteCNumber(String eCNumber) {
		this.eCNumber = eCNumber;
	}
	public String geteLocality() {
		return eLocality;
	}
	public void seteLocality(String eLocality) {
		this.eLocality = eLocality;
	}
	public String geteEmail() {
		return eEmail;
	}
	public void seteEmail(String eEmail) {
		this.eEmail = eEmail;
	}
	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Manager(String eName, String eCNumber, String eLocality, String eEmail) {
		super();
		this.eName = eName;
		this.eCNumber = eCNumber;
		this.eLocality = eLocality;
		this.eEmail = eEmail;
	}
	
		

}
