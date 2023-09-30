<form
            id="form"
            onSubmit={formHandler}
            className=" md:mx-0 bg-white rounded-lg md:w-full h-[550px] lg:h-full py-[30px] px-4 md:px-7 gap-5 flex flex-col items-center"
          >
            <h1 className="text-[28px] font-bold">
              {homepage.table_reservation_title[t]}
            </h1>
            <div className="w-full grid grid-cols-2 flex-1 [&>input]:border [&>input]:rounded [&>input]:pl-2 md:[&>input]:pl-5 [&>input]:border-[#ddd] gap-3">
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.name[t]}*`}
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.mail[t]}*`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.phone_number[t]}*`}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.guests[t]}*`}
                onChange={(e) => setGuests(e.target.value)}
                value={guests}
                required
              />
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.date[t]}*`}
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
              <input
                type="text"
                className="focus:border-primary border outline-none"
                placeholder={`${homepage.time[t]}*`}
                onChange={(e) => setTime(e.target.value)}
                value={time}
                required
              />
            </div>
            <textarea
              placeholder={`${homepage.message[t]}`}
              className="focus:border-primary border outline-none w-full border-[#ddd] rounded pl-5 pt-3 h-[150px]"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              disabled={isLoading}
              className="bg-primary w-full text-white font-semibold py-3 rounded "
            >
              {homepage.reservation_button[t]}
            </button>
          </form>