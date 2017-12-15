const expect = require('expect');

const {Users} = require('./users');
var users;


beforeEach(()=>{
  users = new Users();
  users.users =[{
    id: '1',
    name: 'Mike',
    room: 'The node fan'
  },{
    id: '2',
    name: 'John',
    room: 'The java fan'
  },{
    id: '3',
    name: 'YMCA',
    room: 'The node fan'
  }
  ];
});

describe('Users', () => {

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
   var userId = '1';
   var user = users.removeUser(userId);

   expect(user.id).toBe(userId);
   expect(users.users.length).toBe(2);
 });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });


  it('should return names for node course', () => {
   var userList = users.getUserList('The node fan');

   expect(userList).toEqual(['Mike', 'YMCA']);
 });


  it('should add new user', () => {
      var userList = users.getUserList('The java fan');
      expect(userList).toEqual(['John']);
  });

});
