// SQL ORM 모듈
const { Sequelize, DataTypes } = require('sequelize') ;

// DB 생성
const sequelize = new Sequelize({
    //옵션 설정
    dialect: 'sqlite', //db 종류
    storage: 'database.sqlite' // 저장방식(파일명)
})


// Model(테이블) 생성
const Posts = sequelize.define('Posts', {
    // create(속성 정의)
    post: {
        type:DataTypes.STRING, // 문자형
        allowNull: false // NOT NULL (빈값허용X)
    },
})

module.exports = { sequelize, Posts}