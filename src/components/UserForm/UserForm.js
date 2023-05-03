import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators"
const UserForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode:"all", resolver:joiResolver(userValidator)});
    const submit = async (user) => {
        const newUser = await userService.createUser(user);
        console.log(newUser.data); // щоб побачити що user створився
        reset();
    }
    return (
        // дуже довго писався, з пошуком відповідей в інету, не знаю чи все правильно написано
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"name"} {...register("name")}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={"username"} {...register("username")}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={"email"} {...register("email")}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={"street"} {...register("address.street")}/>
            {errors.address && errors.address.street && <span>{errors.address.street.message}</span>}
            <input type="text" placeholder={"suite"} {...register("address.suite")}/>
            {errors.address && errors.address.suite && <span>{errors.address.suite.message}</span>}
            <input type="text" placeholder={"city"} {...register("address.city")}/>
            {errors.address && errors.address.city && <span>{errors.address.city.message}</span>}
            <input type="text" placeholder={"zipcode"} {...register("address.zipcode")}/>
            {errors.address && errors.address.zipcode && <span>{errors.address.zipcode.message}</span>}
            <input type="text" placeholder={"lat"} {...register("address.geo.lat")}/>
            {errors.address && errors.address.geo && errors.address.geo.lat && <span>{errors.address.geo.lat.message}</span>}
            <input type="text" placeholder={"lng"} {...register("address.geo.lng")}/>
            {errors.address && errors.address.geo && errors.address.geo.lng && <span>{errors.address.geo.lng.message}</span>}
            <input type="text" placeholder={"phone"} {...register("phone")}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input type="text" placeholder={"website"} {...register("website")}/>
            {errors.website && <span>{errors.website.message}</span>}
            <input type="text" placeholder={"name"} {...register("company.name")}/>
            {errors.company && errors.company.name && <span>{errors.company.name.message}</span>}
            <input type="text" placeholder={"catchPhrase"} {...register("company.catchPhrase")}/>
            {errors.company && errors.company.catchPhrase && <span>{errors.company.catchPhrase.message}</span>}
            <input type="text" placeholder={"bs"} {...register("company.bs")}/>
            {errors.company && errors.company.bs && <span>{errors.company.bs.message}</span>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export default UserForm;