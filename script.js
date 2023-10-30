function insert_Row() {
    //Write your code here

	const element = document.createElement("tr");

	const td1 = document.createElement("td");
	td1.innerText = "New Cell1"
	const td2 = document.createElement("td");
	td2.innerText = "New Cell2";
 
	element.append(td1,td2);

	const table = document.getElementById("sampleTable");

	table.insertBefore(element,table.children[0]);

}
