import Section from "./Section"

function Contact() {
    const teksSection = ['Get In Touch With Us','For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!']
    const formInput=['Nama','Email Address','Subject','Message']
    return (
    <div>
      <Section teksSection={teksSection} formInput={formInput} />
    </div>
  )
}

export default Contact
