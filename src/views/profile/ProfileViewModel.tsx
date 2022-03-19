class ProfileViewModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    image: string;
    password: string;

    constructor(id: string, firstName: string, lastName: string, email: string, phoneNumber: string, image: string, password: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.password = password;
    }
}

export {
    ProfileViewModel

}
