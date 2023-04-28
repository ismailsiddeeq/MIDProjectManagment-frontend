
import styles from "../styles/MID.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../data/data'

const Create = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await data.saveCustomer(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return(
        <>

            <div className={styles.text}>
            <h1 className={styles.form_title}>about MID Project Management</h1>
          <div className={styles.text}>

            At MID Project Management, we strive to give you the best experience possible within the project management space. Whatever problems your company may be facing, we are here to help you solve them. We have top of the line
            UI/UX that allows for your employees and employers to manage their task, time they spend on tasks, and much more all from our website! If you are interested in these services, please get in touch with us so that we can tranform your
            business into a more organized profitable organization.
          </div>
                
            </div>
        </>
    )
}

export default Create;