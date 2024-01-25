package com.Manager.Entity;

public class PropertyDTO {
	
	private String pId;
	private String pList;
	private String pType;
	private String pLocality;
	private double pBudget;
	public String getpId() {
		return pId;
	}
	public void setpId(String pId) {
		this.pId = pId;
	}
	public String getpList() {
		return pList;
	}
	public void setpList(String pList) {
		this.pList = pList;
	}
	public String getpType() {
		return pType;
	}
	public void setpType(String pType) {
		this.pType = pType;
	}
	public String getpLocality() {
		return pLocality;
	}
	public void setpLocality(String pLocality) {
		this.pLocality = pLocality;
	}
	public double getpBudget() {
		return pBudget;
	}
	public void setpBudget(double pBudget) {
		this.pBudget = pBudget;
	}
	public PropertyDTO(String pId, String pList, String pType, String pLocality, double pBudget) {
		super();
		this.pId = pId;
		this.pList = pList;
		this.pType = pType;
		this.pLocality = pLocality;
		this.pBudget = pBudget;
	}
	public PropertyDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
