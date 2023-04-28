
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
                <h1 className={styles.form_title}>Tasks Created Seen below</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        
                        <ul class="w3-ul">
  <li class="w3-padding-small">Front-end Development</li>
  <li class="w3-padding-small">Cleaning Kitchen</li>
  <li class="w3-padding-small">Feed the animals</li>
</ul>   
                    </div>

                
                    
                </form>
            </div>
        </>
    )
}

export default Create;