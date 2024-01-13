import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile__container'>
      <div className="profile__info">
        <div className="profile__info__image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5O56miXoYkRAzY9HKvqKzz52vdwRPwYF_4riISE-nQ&s" alt="" />
        </div>
        <div className="profile__info__name">
          <h2>Hi Mike</h2>
          <p>Welcome Back</p>
        </div>
      </div>

      <div className="profile__balance">
        <h3>Today</h3>

        <h1>$19,892</h1>
        <p>Account Balance</p>

        <h3>$4,000</h3>
        <p>Year-to-Date Contributions</p>

        <h3>$1,892</h3>
        <p>Total Interest</p>

        <button>I want to span <i class="arrow down"></i></button>
      </div>

      <div className="profile__recent">
        <h3>Recent Transactions</h3>

        <p>2020-08-07</p>
        <p>Withdrawl Transfer to Bank-XXX11</p>
        <hr />
        <p>2020-08-07</p>
        <p>Withdrawl Transfer to Bank-XXX11</p>
        <hr />
        <p>2020-08-07</p>
        <p>Withdrawl Transfer to Bank-XXX11</p>
        <hr />
      </div>
    </div>
  )
}

export default Profile
