const db = require('./conn');

class Member {
    constructor(id, name, email, dob, datejoined) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.datejoined = datejoined;
    }
  
    static async getAll() {
      try {
        const response = await db.any(`select * from members;`);
        return response;
      } catch (err) {
        return err.message;
      }
    }

    static async removeMember(id) {
      try {
        const response = await db.one(`delete from members where id = ${id}`);
        return response;
      } catch (err) {
        return err.message;
      }
    }
  
    static async addMember(name, dob, email, phone, datejoined) {
      const query = `INSERT INTO members (name, dob, email, phone, datejoined) VALUES ($1, $2, $3, $4, $5)`
  
      try {
        const response = await db.one(query, [name, dob, email, phone, datejoined]);
        console.log('query attempt');
        return response;
      } catch (err) {
        return err.message;
      }
    }
}

module.exports = Member;