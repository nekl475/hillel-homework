let roles = {
    admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
    student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
    lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
};

let gradation = [
    [0, 20],
    [20, 55],
    [55, 85],
    [85, 100]
];

let users = [{
        name: "Jack Smith",
        age: 23,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
        role: "student",
        courses: [{
                title: "Front-end Pro",
                mark: 20
            },
            {
                title: "Java Enterprise",
                mark: 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
        role: "student",
        courses: [{
            title: "Front-end Pro",
            mark: 50
        }]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
        role: "student",
        courses: [{
                title: "Front-end Pro",
                mark: 75
            },
            {
                title: "Java Enterprise",
                mark: 23
            }
        ]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
        role: "admin",
        courses: [{
                title: "Front-end Pro",
                score: 10,
                lector: "Leo Smith"
            },
            {
                title: "Java Enterprise",
                score: 50,
                lector: "David Smith"
            },
            {
                title: "QA",
                score: 75,
                lector: "Emilie Smith"
            }
        ]
    },
    {
        name: "Leo Smith",
        age: 253,
        img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
        role: "lector",
        courses: [{
                title: "Front-end Pro",
                score: 78,
                studentsScore: 79
            },
            {
                title: "Java Enterprise",
                score: 85,
                studentsScore: 85
            }
        ]
    }
];

class User {
    constructor() {
        this.setUserName();
        this.setUserAge();
        this.setImage();
        this.setRole();
        this.setGrad();
    }

    setUserName() {
        let name = users.map(function(item) {

            return item.name;
        });
        this.name = name;

    }
    setUserAge() {
        let age = users.map(function(item) {

            return item.age;
        });
        this.age = age;

    }

    setImage() {
        let img = users.map(function(item) {
            return item.img;

        });
        this.img = img;
    }
    setRole() {
        let role = users.map(function(item) {
            return item.role;

        });
        this.role = role;
    }
    setRoleImg(rol) {
        for (let key in roles) {
            if (rol == key) {
                return roles[key];
            }
        }

    }
    setGrad() {
        let scor = gradation.map(function(item) {
            return item[1];
        });
        this.gradation = scor;
    }
    setValue(val) {
        if (val < this.gradation[0])
            return `Satisfactory`;

        if (val >= this.gradation[0] && val < this.gradation[1])
            return `Good`;

        if (val >= this.gradation[1] && val < this.gradation[2])
            return `Very Good`;

        if (val >= this.gradation[2] && val <= this.gradation[3]) {
            return `Excellent`;
        }

    }
    render() {
        let divas = [];

        for (let i = 0; i < users.length; i++) {
            let divs = ` 
            <div class="user__info">
                <div class="user__info--data">
                <img src=${this.img[i]} alt="${this.name[i]}" height="50">
                <div class="user__naming">
                    <p>Name: <b>${this.name[i]}</b></p>
                     <p>Age: <b>${this.age[i]}</b></p>
                </div>
            </div>
                <div class="user__info--role ${this.role[i]}">
                <img src="${this.setRoleImg(this.role[i])}" alt="${this.role[i]}" height="25">
                <p>${this.role[i]}</p>
            </div>
            </div>`;
            divas.push(divs);
        }
        return divas;
    }
}
class Lector extends User {
    constructor(name, age, img, role, gradation) {
        super(name, age, img, role, gradation);
        this.setCourses();
        this.setTitle(this.cours);
        this.setScore(this.cours);
        this.setScoreStudent(this.cours);
    }
    setCourses() {
        let cours = users.map(function(item) {
            return item.courses;
        });
        this.cours = cours[5];
    }

    setTitle(cours) {
        let title = cours.map(function(item) {
            return item.title;
        });
        this.title = title;
    }


    setScore(cours) {
        let score = cours.map(function(item) {
            return item.score;
        });
        this.score = score;
    }

    setScoreStudent(cours) {
        let studentsScore = cours.map(function(item) {
            return item.studentsScore;
        });
        this.studentsScore = studentsScore;
    }

    setTypeCours() {
        let arr = [];
        for (let i = 0; i < this.title.length; i++) {
            let divas = `<div class="user__courses--course ${this.role[5]}">
                 <p>Title: <b>${this.title[i]}</b></p>
                <p>Lector's score: <span class="${super.setValue(this.score[i]).toLocaleLowerCase().replace(' ','-')}">${super.setValue(this.score[i])}</span></p>
                <p>Average ${this.role[0]}'s score: <span class="${super.setValue(this.studentsScore[i]).toLocaleLowerCase().replace(' ','-')}">${super.setValue(this.studentsScore[i])}</span></p>
                </div>`;
            arr.push(divas);
        }
        return arr.join('');
    }
    render() {
        return `
        <div class="user">
        ${super.render()[5]} 
        <div class="user__courses admin--info">
        ${this.setTypeCours()}
        </div>
        </div>`;
    }
}

class Student extends User {
    constructor(name, age, img, role, gradation) {
        super(name, age, img, role, gradation);
        this.setCourses();
        this.getCourses(this.cours);
        this.setMark(this.cours);
    }
    setCourses() {
        let cours = users.map(function(item) {
            return item.courses;
        });
        let cour = cours.flat();
        this.cours = cour;
    }
    getCourses(cour) {

        let NewArr = cour.map(function(item) {
            let title = typeof item == `undefined` ? '' : item.title;
            return title;
        });

        this.title = NewArr;
    }

    setMark(cour) {
        let NewArr = cour.map(function(item) {
            let mark = typeof item == `undefined` ? '' : item.mark;
            return mark;
        });
        this.mark = NewArr;

    }

    setTypeCours() {
        let arr = [];
        for (let i = 0; i < 6; i++) {
            let pvs = `<p class="user__courses--course ${this.role[0]}">
                    ${this.title[i]} 
                    <span class="${super.setValue(this.mark[i]).toLocaleLowerCase().replace(' ','-')}">${super.setValue(this.mark[i])}</span>
                </p>`;
            arr.push(pvs);
        }
        return arr;

    }
    render() {
        return `
        <div class="user">
        ${super.render()[0]} 
        <div class="user__courses">
        ${this.setTypeCours()[0]}${this.setTypeCours()[1]}
        </div>
        </div>
        <div class="user">
        ${super.render()[1]}
        </div>
        <div class="user">
        ${super.render()[2]} 
        <div class="user__courses">
        ${this.setTypeCours()[3]}
        </div>
        </div>
        <div class="user">
        ${super.render()[3]} 
        <div class="user__courses">
        ${this.setTypeCours()[4]}${this.setTypeCours()[5]}
        </div>
        </div>
        `;
    }
}
class Admin extends User {
    constructor(name, age, img, role, gradation) {
        super(name, age, img, role, gradation);
        this.setCourses();
        this.setTitle(this.cours);
        this.setScore(this.cours);
    }

    setCourses() {
        let cours = users.map(function(item) {
            return item.courses;
        });

        this.cours = cours[4];

    }

    setTitle(cours) {
        let title = cours.map(function(item) {
            return item.title;
        });
        this.title = title;

    }
    setScore(cours) {
        let score = cours.map(function(item) {
            return item.score;
        });

        this.score = score;

    }
    setTypeCours() {
            let arr = [];
            for (let i = 0; i < this.title.length; i++) {
                let divas = `<div class="user__courses--course ${this.role[4]}">
            <p>Title: <b>${this.title[i]}</b></p>
            <p>Admin's score: <span class="${super.setValue(this.score[i]).toLocaleLowerCase().replace(' ','-')}">${super.setValue(this.score[i])}</span></p>
           <p>Lector: <b>${ i== 0 ? this.name[5]: i== 2 ? this.name[4] :`David Smith`}</b></p>
        </div>`;
            arr.push(divas);
        }
        return arr.join('');
    }
    render() {
        return `
        <div class="user">
        ${super.render()[4]} 
        <div class="user__courses admin--info">
        ${this.setTypeCours()}
        </div>
        </div>`;
    }
}

let Lect = new Lector();
let Stud = new Student();
let Admi = new Admin ();
document.write(`<div class="users">${Stud.render()} ${Admi.render()}${Lect.render()} </div>`);