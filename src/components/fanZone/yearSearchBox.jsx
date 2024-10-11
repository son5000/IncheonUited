import { format } from "date-fns";

const date = new Date();
const currentYear = format(date,'yyyy');
const YEARS = [currentYear,currentYear-1,currentYear-2,currentYear-3,currentYear-4,currentYear-5,currentYear-6,currentYear-7,,currentYear-8,,currentYear-9,currentYear-10,currentYear-11,currentYear-12,currentYear-13,currentYear-14]

export default function YearSearchBox({handleClick,SelectedYear}){

    return (
        <div className="year-search-box">
                <ul>
                    <li>{SelectedYear}
                        <ol>
                            {YEARS.map((el,index) => <li key={index} ><span onClick={()=> handleClick(el)}>{el}</span></li>)}
                        </ol>
                    </li>
                </ul> 
                - 
                <div>
                    <input type="text" />
                    <button></button>
                </div>
            </div>
    )
}