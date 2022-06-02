import React, { useState } from "react";
import ResultsList from './resultsList.js';

function UploadDataContainer() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [topPair, settopPair] = useState([{}]);

    const fileReader = new FileReader();
    let ids = [];
    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    function csvFileToArray (string) {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(", ").map(str => str.trim().replace(/^"(.*)"$/, "$1"));
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n").map(str => str.trim());

        const array = csvRows.map(i => {
            const values = i.split(", ");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index].trim();
                return object;
            }, {});
            return obj;
        });

        setArray(array);
        findEmployeePairs(array);
    };

    function handleOnSubmit (e){
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };
            fileReader.readAsText(file);
        }
    };

    return (
        <>
            <div style={{ textAlign: "center" }} >
                <form>
                    <h4> Find the pair of employees who have worked
                        together on common projects for the longest period of time. </h4>
                    
                    <input type={"file"} id={"csvFileInput"} accept={".csv"} onChange={handleOnChange} className="uploadArea" />
                    <button onClick={(e) => { handleOnSubmit(e); }} >
                        Find top pair
                    </button>
                </form>
            </div>
            
            <ResultsList id1={topPair.id1} id2={topPair.id2} daysTogether={topPair.daysWorkedTogether} />
            
        </>
    );

    function findEmployeePairs(array) {
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = 1; j < array.length; j++) {
                if (array[i].EmpID !== array[j].EmpID) {
                    if (array[i].ProjectID === array[j].ProjectID) {

                        let firstEmployeeDateFromDr = array[i].DateFrom === "NULL" ? new Date() : new Date(array[i].DateFrom);
                        let secondEmployeeDateFromDr = array[j].DateFrom === "NULL" ? new Date() : new Date(array[j].DateFrom);
                        let firstEmployeeDateToDr = array[i].DateTo === "NULL" ? new Date() : new Date(array[i].DateTo);
                        let secondEmployeeDateToDr = array[j].DateTo === "NULL" ? new Date : new Date(array[j].DateTo);

                        // Dates represented as Milliseconds - we will compare numbers instead of dates
                        let firstEmployeeDateFrom = firstEmployeeDateFromDr.getTime();
                        let secondEmployeeDateFrom = secondEmployeeDateFromDr.getTime();
                        let firstEmployeeDateTo = firstEmployeeDateToDr.getTime();
                        let secondEmployeeDateTo = secondEmployeeDateToDr.getTime();

                        if ((firstEmployeeDateFrom < secondEmployeeDateTo || firstEmployeeDateFrom === secondEmployeeDateTo)
                            && (firstEmployeeDateTo > secondEmployeeDateFrom || firstEmployeeDateTo === secondEmployeeDateFrom)) {

                            let periodStartDate = firstEmployeeDateFrom < secondEmployeeDateFrom ? secondEmployeeDateFrom : firstEmployeeDateFrom;
                            let periodEndDate = firstEmployeeDateTo < secondEmployeeDateTo ? firstEmployeeDateTo : secondEmployeeDateTo;

                            let periodDurationInMiliseconds = periodEndDate - periodStartDate;
                            let periodInDays = Math.ceil(periodDurationInMiliseconds / (1000 * 3600 * 24));

                            let twoEmployees = addToResultArray(ids, array[i].EmpID, array[j].EmpID, periodInDays);
                            settopPair(twoEmployees);
                        }
                        else {
                            settopPair({});
                        }

                    }
                }
            }
        }
    }
    
    function addToResultArray(ids, emp1ID, emp2ID, periodInDays) {
        var employeePairIndex = ids.findIndex(x => (x.id1 == emp1ID ) && (x.id2 == emp2ID));
    
        if (employeePairIndex < 0) {
            ids.push({
                id1: emp1ID,
                id2: emp2ID,
                daysWorkedTogether: periodInDays
            });
        }
        else {
            let daysToUpdate = ids[employeePairIndex].daysWorkedTogether;
            ids[employeePairIndex].daysWorkedTogether = daysToUpdate + periodInDays;
        }
    
        ids.sort(function (a, b) { return a.daysWorkedTogether - b.daysWorkedTogether });
        ids.reverse();
    
        return ids[0];
    }
}

export default UploadDataContainer;



