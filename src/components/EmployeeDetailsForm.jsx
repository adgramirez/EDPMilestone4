import InputBox from "../ui/InputBox"

function EmployeeDetailsForm() {

    return (
      <>
        <div className="flex-row">
            <InputBox label="First Name" placeholder="Enter your first name" className="employeeDetailsInputBox"></InputBox>
            <InputBox label="Last Name" placeholder="Enter your last name" className="employeeDetailsInputBox"></InputBox>
        </div>
        
      </>
    )
  }
  
export default EmployeeDetailsForm