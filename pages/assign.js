
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
                <h1 className={styles.form_title}>Assign a Task</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="name">Task Name</label>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   {...register('name',
                                       {required: true,
                                               message: 'please enter task' })}
                                   placeholder="task"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="email">Employee Id</label>
                            <input 
                                   {...register('email',
                                       {required: true,
                                           message: 'please enter employee id' })}
                                   placeholder="id #"/>
                        </div>


                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="Assign" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create;