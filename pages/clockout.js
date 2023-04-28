
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
            <div className={styles.container}>
                <h1 className={styles.form_title}>Clock out</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            
                            <input type="datetime-local" id="meeting-time"
                            name="meeting-time" value="2018-06-12T19:30"
                            min="2018-06-07T00:00" max="2024-06-14T00:00"/>

                        </div>

                        

                        



                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="Clock out" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create;