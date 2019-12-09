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

    static async updateMember(id, status) {
      console.log("ID + status: ", id, status)
      const query = `UPDATE members SET status = '${status}' where id = ${id}`
      try {
        const response = await db.one(query, [id, status]);
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

    static async addSale(member_id, cost, item) {
      try {
          const response = await db.one(`INSERT INTO sales
          (member_id, cost, item) 
          VALUES ($1, $2, $3)
          RETURNING id;`
          , [member_id, cost, item]);
          
          return response;

      }catch(err) {
          return err.message;
      }
  }

  static async getSales() {
    try {
      const response = await db.any(`select * from sales;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Member;