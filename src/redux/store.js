import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likeCounter: '15'},
                {id: 2, message: 'It\'s my first post', likeCounter: '24'},
                {id: 3, message: 'Blablabla', likeCounter: '19'},
                {id: 4, message: 'Dada', likeCounter: '21'},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Yuliya'},
                {id: 4, name: 'Petya'},
                {id: 5, name: 'Vova'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: '',

        },
        sidebarPage: {
            friends: [
                {
                    name: 'Victor',
                    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSEhYYGBgaGRgYGBgcGBgcGhgaGBgZGhwYGBocIS4lHh4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJSs0NDQ0NDQ0NDQ0NDQxMTE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUBAgMGBwj/xABGEAACAQIDBAYGBggFAwUAAAABAgADEQQhMQUSQVEGMmFxgZETInKhscEzQlJistEHFCM0c5Ki8CRDgsLhY7PxFVNUg6P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAKhEAAwACAgEDAwQCAwAAAAAAAAECAxEhMRIEMkEFIlETYYGRI3EzQ7H/2gAMAwEAAhEDEQA/AJ8RE8QegEREAEREAEREEQIkbGbRp0gTUcC3AZt4AZzym0uk1V7rSRkXnb1j48Jswejy5elwJyZ5js9bicYlMXqOq95z8hKjE9J0GSIW7SQo8tfdPFu7k3YMTxJuTOe/2GdfF9Lxyvu5Ziv1dV7eD01TpNVPVKL3KSfMn5Tg2365/wA23ciflKDfE2BmyfSYZ4UoQ81v5L7/ANfxIzFRW7CifK0kYfpa4ydFbtUlT5G4nmIdeUivSYa7SJWa18nu8J0loPkxKH72n8wuJdIwIuCCOY0nyYOZMwO1KlI3psV7NVPeDMOf6VLW8b0Pj1jXFI+mxKDY/SZKpCVLI/8AS3dyPfPQTjZsF4nqkb4ubW5MRERAwREQAREQAREQAREQAREQAREQIEzNWMrm2ygO6VdWGqmwPv1jceKr9pWqU9lk7gAsxsALk8gOM8XtvpMWvTokqmhb6z93JffLTbmIOIQU6Z3EGbDVnPaRw7JQHYp+37p1/R+kiPuycv8AH4MefLdcT0VLYpzx/vxmvpm5mWjbGfgwPhOD7KcTrLJHRieK/lEQV25zYYo8/gZs+AcTg9Bxwllcv5IcUvg6+lB1CnwmCg5W7pHJI1Eyr8pcpo7WPA3mN/nMCpN9YAaOvETlOzU/rL4jiJH3jADLCey6IdIQzLhcQcm9VKvEHgr/AGgeB1HbPGM00ic2Cc0tMvF1D2j7NiKDI263geE5SD0M23+t0jh6zftqYurHV0GQbvGhHZeWfoDcr9YcOfdPKZsVYrcV8HWxZVc7OURESOERECRERABERABERABESFjsYyj1Ajc7uBbw4xmPHVvSKVSlclrhsNvXYmyDrMbADsucpA29j6Dp6KnTVwMt9hkO1OJ79JTPjq1QAVMlGik2Udu6OPabmaEHmPAf3adPB6Twryp/0Zbp0yJ+qgdUsPG/xmw3x9YHvE7MJjdm8qab7cR5GbCZtMCoul792cANWScamGU8JI3uyaOYLZD0VdfAA6flKuvg+U9I0j1UB1jZukLqEzzTArrMq/KWVeiDcDOVlWnumaJvfZnqNdHZaljceM1xKDJ10PDkZxV+c3R+BjBZxibOtjaawAlbOxzUKiVkNmQgj5juIuPGfaKddMRSTE0j1luOYPFT2gz4bPe/o42uV36DH1bhwOV8jb4zl/VMHnj857X/AIPwU5o9myekUsuTjrDn2jtkAy2xVMqRWTvYcD2905YumHX0qf6h8++ebR05oroiJI0REQJEREAEREAG7fK175W7+EkP0WpFRus6NxKnLPsMk7KoXJc8NO+W0P17xvUvRlzVt6PI1uitUXKVlOR6ycu0GebwKV6zikiqWYMwzysouTpPpuIayOTwRz5KZ4noFUH68CTYLQqEnkLCdf6fnvMm65M1V4kWvsPGqLsigc98AeZAlQ7VL23ky1IYEefGeh6V9J3xO/TUhKPBeLjgXPbraeKqInA+Az8Mp00tg74LhUX/ADH3jyvl5Tp6dALAgCeg/R30ap4ijUeulxvgIzLqN3O29wvPWjoThRpTT+VZSmky01L7Z8tfHIPrDznFtopwz7hPsNHorQXRF8FQfKeM/SJg1ovT3RZWQgHtBGXlBNNg6n4Z4p9oE6KfIzgKjOc8gNWJyH/MkPWDeqgZj90EnyE416DpZilVLEEM6Pa/A5i0YtC2yx2ds2rW9Wgnq/WqMCF7SOJ7hKvH4UKSAd6xK30vY20n0fZ23jiMGaioA6KysiL9cDJgBzyyHOeHxOBqU33awCuVU7t77ofP1vva3EiW9sZUrxR5h0sZqJPxtGxP9+MgTVFbRjqdM6vmL8pynSmeE0IlyhiXPRHEhMXSLaM243c4t8bSmkrZn01L+In4li8sqoafymWl6pM+u0Nt06eJ/UXPrEeqx6tyCQp8LybUU0X3h1G1HKeU6SbCrPtKjVRSyOyEsAd1dzrFjw9UG3O89hhn3gaNQesMs+I/OeV9VjiFNQ97XJvxXT3sg46gFO8uatmPykWWDJuXpVOqc0bkeEgMtsjw+MzI1w9oxERAuIiIEiZVbkAanKYkzZdPee/LPx4QfC2Vp6nZb0KYRQo4fPWbxMzM3t7MLe+SBtxiMPWI1KMoHElvVFvOeU6HbPY4ytRY7r+hroT9kkqv5T3JHOUHRaiy7VxDEZFHKnn66X95tOz9Ky63P8i76LLo/wBB6NJd/EqlapfIkHcUcAiH4mepTCIuSog7lUW90YrELTRqj9VFLHuAvPmGH/SHXWuKlQKaBNigGapfrBtbjXtnVW6F6bPqgH98pmaowIBBuCAQeYIvebShAnDFYSnUXcqojrrusoYX55jKd5zr1Aqs7aKCx7gLmSiTGHw6ILIioOSqF+E3cBgVb1gdQcwe+8+O4vppijW9OjlVBuKeW4UB6pHMi+c+u4LErVRKqdV0V17mANvfJaa52DnXZE2dsPD4cuaNNU323mtz7L6Dunzj9IeFKYhH+0rKf9Lb49znyn1meH/STgC9JSgu+8th3ncPuf3SZfJeO9HyvGpcXlNVFjL+svqkcRceIyIlLXTIiasbKWtojqc5tU1mk3fQTQZzSWPR6lvYmio41EP8p3vlK6ex/RpgN/EtVIyprce0+Q90z+pyKMNU/hMtK3SPq5kXG4be9ZcnXQ8+ySoniPLnZuT0QVK1UKnJh7jz7pVVlYMQ2oylri6JU+lTUdYcxNMUi1E311A/8gx0v+h8Vp7+CpiIljQIiIEiXGyUshbmfhKeegwS2RR2fGVv2icz1J3iIiDIYmmzEH64GH/x3/7qfmZ0mdl/vXdQPvqJ+U3fT21m/hlL6LHbmHNTD1aY1ZGUZXzIyGXbPhVTCVC4w4RxUchAhUhrnLj8Z+hJyrYdGIZlG8vVaw3lysbHUZfGd+aKJtGMHS3ESnruIi357qhflO0jAsXOdlW2XFiRn4DKSAZDIRmccZR30dDlvIy35bwtedpqw8JAM+DPsfE+lfDJRdnQ7pAUkDkSdLWsbz7dsjDejoU6WY3ERM9fVUAnzvNq9anRX1st42AAJd2toAM2Pw7JqtTENmtAKOTuA3koIHnGqapcIir32TZX7UoFgtuBJ7vVP5CBtHdYLWRqdzZWJDISdBvDqk8L2kzENZSew/CUcuXyWitNNHwPao3az0x9t/K5/OUlYZme52/sFqaPiXHrvULW+zTYkKPn4zyFLCNUcqikm/8A58rr5zRDXZepbZUTPCdMVT3HdL33Xdb891iL+6cpqRkpaZifY+gey/QYVSws9T1252PVHl8Z886GbEOKxADD9mlnqHhrdV7z8AZ9nAtkP7HATh/WfU/asK/kdhnnbMzEzE82aDErqqGk28BdGyYcv7/OWMw6ggg5iXitMvNaZ5xwASBpw7prO+LobjleGo7pwjzZPQiIgWAnpUFgB2D4TzSz0y6DuHwi8nRmzmYiIkQJnZX7y38Ae+qfyms32QP8S/ZQT31an5Tf9P8A+b+GLvov4iJ3Sho9MNqLxTpBclAE3iBAnHFYhUQu97DgM2YnJVUcSTkJmviFQbzkDlfU9gGpM54XDtUcVagKhc6aHUXyLtyYjQcI3HjdMrVaQ2XgCD6esAarDwprwpr8zxN+wC2tAmrkgZC83paWhPZC2iibjCrbcIswOhBytYcTwtnfTOVuxnYo1GrcvSYoS2rIVDU2bmxRlBP2laWbYYkh3N2HVH1V7R97t+Erla2LYcGw6N4pVqLfycRWadzstL0yu6VYVXRkOjIw7rDKeM6O7N9FhldxZ3Zmvod1iLd2SLPoWOwxdhfJQMzz7J5vabAWHaT4CYVT6Ot6ZS9flHxbaJvVqnnUf8bTXC4d6jrTpjeZmCqOZPy1PcDOdR95mbmzHzJM93+jPZ6lqmIYZqQiHlcXYjt0E2Z8yw4Xf4OXS8rf+z2vRzZCYWgtJMzq7fbc6t4ZAdgEtpzp6TpPF5clZLd0+WaZWloRERRYRESQKja49ZfZ+cr5ZbY1XuMrZono24/ahERJGiXOzqxI3G6y6dolNLKsCFSquoABkUtrQnIk1plrE50qgZQw4i/5idJn6MmtGI2c+5ic9KlMoPapszgeKu/8szOGMRt0OnXRldPaT6viLjxmn0eX9PKm+nwUtbR6eZnDCYlaiLUTqsLj8j2g3HhO89EKMSCBVrMwR/RopK7wUF2I1sTkoBy0vJ0gUsV6BzTcMQ7Fqe6Cbk5sh5EajPQ9hjsKl1yVon4XZtNDv2LPxdiWbzOnhJokPerMcgtNeZ9Zz3AeqveSe6SKNILzJ4km5PiZuSEnWImGa0kDliDlaUtEb2LqMNEo0kPtO9SoR3hdw/6pJx+PCn0aDfqnqoDw+05+qnMnwuZwp2oIS7bzsxd2+27WuQOCiwAHAKIjPaU6LxLp8G208SFXdHWbLw5zwu2sRZKj/YR/6VJ+MutoYo5sesdJQ/q36wxpHqf5pBsWFr+iB4E8eQ7SLc93MLyrpHYxwsOJt/J866O9H6uKYBBuoLb7nQdg5tPreydnJh6a0qY9UceLE6sZIw9BUUIiqirkFUWA8J1E5HrfqFZ349T+DmKdcnWnpOk0QaTecwdPQiIgSIiIAVG1z6y90r5M2o937gB85DmldG2F9qEREkYJZbNqhgabaG9vnK2dsMLnLrDNfDWDW0UpbknYJyjGm2hPq9/DzEs5WYob6Cquq6+GvvzEl4PEb6g8RkfDjFWvkzWvkkRERYs44bEth2JALUmN3UZlG4uo4g8R4z0dGstRQ6MGUi4YG4MoDIq0mRi9FzTYm5AzR/bQ5HvFj2zrel9elPjf9ianT2j1k5YjDq67lRQym2XIjMEciDoRKajt51yrUmP36XrDvKE7y9w3pLo9IMKxt6dFP2XPo2/lexnTjJNcyyjOiJiKeVN1qLwWpcMOwOozHeLzsNoYgdbDg+zUX5ibLjaZFw6HuZT8Jq2PpjU+QJmlZ7I/T30jDY/EHq0FHtVB/tBnJ6Nep9JUCL9mmufdvtp4CavtZfqqx90rMdt0KPXqJTHawB95+Eh5qY2fTU/gtD6LDqQgzOZzJZjzZjmTKTHYwm7ue4SprbdVjair1CSBvWKpcmwu72HleaNs2pUN6tQewi3Qcg+d28bDsiLpLmmbseGcf7s0u1drU8lGRf6q9i/ab3CXGGw6ooRBYDzJ1uTxMitXNLdWoU3dLKCrKPtFRcbo4m4nT/1Kjf6ROV7+r3B+qT2XnI9XWW3464/YzZqqnyTBN0Gc0E6os5r/AHFI3WZmBMyowREQARE44upuozdlh3nKSltlktvRR4l952bmf+JyiJpNyWloREQJE3pPusGHCaRAgtaTBHt9Rxcdh5fKaA+iqW+q3w/4M5Yc76FPrL6yfMSSR6Wn95fiPzEq+zO1p6f8lgJmQdmYjeXcOq/CTomlpiaWnoxNWWbzEqVODLObqCLMARyIBHkZJZZGXeclaQDW1c9RTyuOsewecdjm30Lc8kDE4LD3CmijOwJUKgDG1tN23MTDbGpmmqL6lS1r79QoXta11bI8ZOOzgL79y51Y/wC23VHdOTO6GzJvrpvLYP2XBya3PIzrYdzKW+R84nK3sr32EqD9qj2Azbfd1P8AV8ROVDDYcH9hT325Igvftbh5y5wGNpVATVrC5LKEcbgsCV0bXTnLHD4jdyWkQOasjKe24N4557Xa5GzlaWuzz42e+b1W3Avrbq5sN3PrfIZyThluN4+ogztfMnm7c+wTttLaiJdmZQbgW3gTYkAmwz4yGzlzenTtyZ8gPZp6+dpHlVLdDNuiZVxCWJIG4esxsA3YL9b4SNVxWV2S1K1jccMrXT7Oufu4zpSwee85Ltzbh7K6CSvQ9sXtJlvFa5OWy0IpU97XcXuzGQ8Bl4SaJX+jZDenpxQ9U932TJWFxSvlmrDVDqO0cx2jKczPhrbr4MlY3PZIiYmZlKCIiACVe16uiDvMsajhQWOgE89UcsSx4/3aNxr5HYZ29mkREaaxERABERADelUKsGGok+nVCOHXqPr2Ht7jK2brUyKnTXx5iGti6nZOxtM03FRdDr8x4yzpuGAYaHP++7SRMM4q0yrajL8jOOzqpRjTfnl3/kYultfuhFLa/dFpOdaqFAvc3NlUAlmPAKBmTl7jewuZ0kHDYzcqVN6mzupChltZUYBlC3OpGZ7R3S2DF50/2E6fSJibPZ86xsv/ALSnI/xH1Y/dFl75aIAoCgAAZADIAdnZIlDaKOd3NTyYW8jpJl5paa+3Qa12augOovODYNeH5yTOeIayMeSsf6TCaaa0W8muij2Zs/eoociGG9Y/eJOhHbNzsBDqieQHwlhsdbUKQ/6afhEmxtZaVPRZZK0UrbEXcdFCjeVhYADUWmMCpaklQjrIpJHMgX995dyu2GLUdz7L1k8Fqvb3WkrJTl7J/VrZyidcQm6ew5zlJT4NEva2YZbi0g1aQbI6g5EZMp5qwzEnEyHvgki+fwltfgukn2Zp4pkyq+sv2wLfzqNPaGXMCTgb5jTzBlYWc6BRyJJPuE6bIU2ckgDfKhRoCupF+d9Jkz4ZUulwZs2NTyiwiYkTH4rcFh1j7phlb4FSvJ6RF2pibncGg17+XhK6LxNCWlo2RPitCIiSXEREAEREAEREAJGBr7jgnQ5Huk7adHSouo1I5cGlTJmFxpX1XzXTtH/EhrnaFVHO0WuFrh0DcdCO2Z2YgNXEAi/0P4D+UrMNU9G+RujaH+9JbbL+lr91H8DRmFeNPX4MuRNUbYvC2zGnDslc1RkdH3juh1DKcwQ/7O+embA5T0NZbqRPNbYFqbkcELDvT1h+GasT29MfL8paZ6m844rqP7D/AITOgN8+efnnMVRdWHNSPMGJ6sz/AAcsAP2Sewn4RJEj4I/s09hfgJIhXuYLowZB2Sllf+NWP9Zk6Q9mYZ6abtRgzb7tccN9ixAyHEmTL+1kPsY4aHvkWSca2YEhVagVSx4C/lnHR0jXj9pExNUuxpqbAddhwyvur96xuTwvN6NCwsosPj38zM4KiGAK5g+tf7W8b39/lJ9aju2lqrnRfyU8EBhY2MzsvJXH/Uf3hTOlcaGQKWMCb6r1t8nuuq5xOed42v8ARXKnUrX5J+LxIQc24D5mUdRyx3mzJh6hY3Y3JmsyTPiEQpQiIkjRERABERABERABERABERABLvo1VLPWvwFEeSvKSXHRXr1//q/C0di6YjOvtR6KUO06d1deauvmpl9KfGC5PfGYXqheHtk/Zb71Gkx1NNCfFFMlCQNiH/DUf4aDyW3yk+Uvin/sUQ9l1d6muRFrrYi3VNvlJczMSG9vYCYY2m0h4yp9UeMJW2TK8mRqj3JMiYrMFeYI8xaSCZFY3mqeGjbM6RK6NJ/h6THU00/AJOxwyB7ZE6NfulD+En4RJeN0HfFW/wDIzKnu9lbXGUoatvSP7S3/AJBL6vpKGt9I/en4Za/azX8IxERMRIiIgAiIgAiIgAiIgAiIgAiIgAlz0W61fvpX/kaU0tOjlYL6bLVk91MfnH4ltPQjMm0kekqNYEykxL5+8yRiMXfL3SvxDWV2+6x8gY7HOmTjhym2WuwP3ah20qZ80BljK7YjgYagLjKjSH/5rJhrrzEXkTdvX5M2mzpMyK2LHC5nGpiWOmUhQ2WUUzvXrgZDWQTNWcDMzi9W+kbM+KNEY9Gaz8BOYmBNl1EsuzRrS0Tujn7rQ/hp8JIxxyEi9Gv3Wj7FvIsPlO2Mb1rchFtf5Gc+ObINc6SixH0r9yH3GXdY5ykxP0z+yn+6Wr2M2PpGIiJiJEREAEREAEREAEREAEREAEREAAnfZX+b7a/9tIiafT9MpXaLATni/o39h/wGIj57G17SRs/6Kn/Dp/gWSFiJR+5mOfgyZq0RLD0RqmsREBsmBNl1HePjMxBdk0S+jX7tS9k/jeb4jrmIlP8AsZgxe4gvqZS4n6Z/YT4tES1exmt9IxERMICIiBIiIgAiIgB//9k='
                },
                {
                    name: 'Alex',
                    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRUWEhQVGRgYGBgcHBoZGhkaHB4ZHhkZHBgcFhofIS4mHB4wHx0dJjgmLi8xNTU1HCVIQDszPy40NjQBDAwMDw8PEQ8PEDEdGB0xPz8xND8xND8xPzQ/NDQxPzQxNDExMTQxMTExMTQ0MTExMTExMTE/MTExMTExMTExMf/AABEIAOQA3QMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHCAEDBAL/xABFEAACAQMABgUHCQcCBwEAAAABAgADBBEFBhIhMUEHUWFxkRMiMlKBodIUFiNCYnKCkqIXM7GywcLwQ1MkY3ODs9HhFf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMZiImlIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAkhobRlS7rU6FIZdzgdwBLE9wBPskfNv6EdWfJo97UXfUBSl2ID57e1gAOxT1yCiabt6NG1qJTQBlqIjMQNonAYFjjO8b8cOMpc2vpl1UOwby3BAyvl0HAjeEqY5YLEH7wPIzFICIiUIiICIiAiIgJ9NkQKiE8A6k537tocZ80kNCaNqXdenQojL1GAHUOZY9QABJ7BAm9ZNDripWt0wlOpsOF9EeiNodQ22KEdYEqk6n0fqhb0bNrTBZHQq7H02JByxPI7RLDqM5r0/ol7O4q29UedTYjPJhxVh2EYPtkEZERKEREBERAREQEREBERAsGpmrr6RukoLkL6VRh9WmD5x7+AHaROo7S2SkipTUKiKFVRwCgYAHslS6M9Vho+1BYA1qwV6h3HAxlEBHEKD7STyxLrIPRcUFqKyOoZHUqyneCpGCCOogzmnpA1QfRlcqATRck027PVY+sPfOnZFaw6DpX1FqNcZVhuPNW5MvbA5JiWPW/VWto2sadQEqfQfkw/of8AO6uShERAREQERP0qknA3wCqScAZM6B6J9SzZUjcXC/T1V3A8UpnB2fvHcT3AdchOi/o8Klbu8Tfxp02HDqZx/ATY5AmXdM2q3l6IvKS/SUF8/HFqOck96nf3FuoTUZ63QMCCMg7iDwI5iBxzPEuPSTquNHXZVP3VQF6e8ZUZwUI4+adwPMY55lOlCIiAiIgIiICIiAnmeIgdPdGek/lOjbZifORfJNz30zsjPeoU+2W2ZB0B6QzTuqB+q6VB+IFW/lXxmvyBERAi9PaEo3tJqVdAynh1g9YPKc8666j19HOSAXpHeHA4D7X+d/InpqfJf2SV0KVFBU9fLtHUYHH8TUNd+jvyLlqGAGyVHBW6wPVbs4Hsmb3Vs9NitRWVhyIwf/o7ZR88RJrRGr1W5wQNhPXYbvwji38O2BGW1u1RgtNSzHgBxm2dHXRqtHZuL1Qz8UQjcvaw5n/O+c1F1FpWarUdM1DgjO8jqLdvZwHfL5IPAE8xEBET03FYU1Z23KqliewDJ9wgc49Lek/lGkqwBytELSX8Iy/62YeyUifTf3TVqlSo3pVHZz3sxY+8z5oCIiUIiICIiAiIgIiIGg9C2kBS0iFJwK1N0HVtDDj+Qj2zoqcfaPvGoVadWmcPTdXU/aUgj2bp1nom/S5o0q1P0aiK47AwBwe0cPZIPuiIgJ66jhQSxAAGSScADmSeQn7mO9J2u5JNtascDAdxw35I39e47I7M9UD269a/0nfyFLDBCSScgbQBGWIBI3E4UAnfvxKJpHS9OupWqSw342KGCv3Xd857cCQCjH+fxnmUfVbNZ03BPl8j16dN17yobfLHa61CmQwqU32SCAEak4xvGA2VbuyJTrhcqc8uE+CQdS6pa1UdIUwyMNoekvbzIB3+zl4E2Wcl6vaYrWdZKlAnayNw57+Hfv3d/USD0pqlrDTv6IqIRtD0l5g93Lnu5EGBYIiICVbpIvfIaMvG9amUH/cIT+6WmZB07ab2UoWine5NV9+/ZUlUBHUW2j+AQMUniIlCIiAiIgIiICIiAiIgeQZ0H0QaS+irWjH9wwen20Kvnrjrwxb8wnPk0zU7SXyWro+64U3X5NWP2SdlCTyAdQc9QEg36Inrq1AqlmOAAST1ADJMCn9ImsnySgUpb61QYCjiFO7ab1R2nkDzxMgv7MVKCUrdvL3Bqh2CeezMQwYkLwUZx2ATStV9aaFVrg1Lp6DNc1CuRTCOucIEdqZ2mCgKRnPm5G4y4Jpy2Rd9wrdu4sfYij+EDMtW+iR6ih7+qaef9Klslh96oQVB7AD3y4UOi/RijzqLv2tWq/2sBP1pbpAt6O5cd7sEHsG8n3SEfpPU+jUth3kn+4QLVb6jaNp+jZUD99Nv+bMpHSb0dU2ptc2FII6Al6VMAKygb2RRuDDiQOIzz4/PW10Ny60/lO0WzhU81dwzvK4B4cyTNE1Y0z8oTZY/SKN/2hwDD+vb3wOatWbFri7t6S4y9VBv4Y2gST2YBmj210+iLwVdkrSd9iunquSPP6gD18MgGTt/qtQ0bpOlpD0bYswcADZo1ailFduqkS3H6rEcuE5r7oNa9NqmMgjZqAc15N3g8+7qgXCjVV1VlOVYAg9YO8Ge2Z50VaaZ6dSzrHNS2OATxamfRPHqIPtM0OB+SccZy5r3pY3l3VuM5R2YUx/ykOwh7M7JPeTN36SdLm2sqgT95XIoU+vaqZBI7k2j34nPesyBKwprwpIid5C7RPixgQ0REoREQEREBERAREQEREBNP1A0aNIaPvLXdtgFqeeTr5y+JciZhNO6D7rYu3TPpp/AMT7wsg1nUTTJvLKjUfPlADTqA7iKiea20OROA2PtSN6UtMNb2nk6Z+kuGFNevfxI93vjRQ+RaUuKHClep8op8ABWTzbhR1sRsuZBazo1/pilbqTs26AnqDvk5PaE2j7BAmtQdW6dO3HlEV1K7AV1DAqPTYgjB2mz4dsmjqfY4IFrSAPJV2R7ANwk1RpBFVVGAoAA6gBgT83FdaSM7sFRQWZmOAqgZJJPAAQOS9JWDUrirQOWdKjpwJLMrFRgcSTj3y/6L6HrurSD1atOizDIpsGYgY3bZG5T2DOPdLvSsrS3u6ukLhG8vWIalSI86mmwE22U4Cu+No53rnHHMnaGudAnDpUUdeAw9uDn3QMO0xqFpHR7eUNIuqEHylE7agjmVwGA7SoEtOq+n/KBK1I7LofOXqPMdqEf5kTZbK+p1hmlUVhzwd47xxHtkLpjUy0uWNTYNKqc/S0TsOfvjGy/AekDAkLG7pXtA5VWDKUdG3jeMMrDmCPESK0KzW1Q2FwS6FWNs7b9uiB51JyeLpnH2lIPJpGW+rV/Zvt21ehWHArUDUWYdTMoZWP4Vn2aZvBWp7N1QuLaorB6dYIKypVXOw6vSLALyO2FypIPGBTNK020VpKjXGdgsKbfaptnYY9o3rmbErAjI4GZxrFsaX0e9RChq09pHCMHUOMHKMD5yZ2XU+qd+DkCa1V1iU6Kp3VU7qVJtvrzTBDDv3e+BF6X/wCN0nv30dGUTUbqNw67SjqOFUHsIPXMG01W8pcVm63fwBIHuE3fR9JrXRFxcVt1a527ipnOc1SCF38MJgY5b5z2TneYH5iIlCIiAiIgIiICIiAiIgJbejK88lpG3PJ22D3Eg/0lSn26IufJVqVTONh1PsyM+7Mg6R6QbdloJd0h9JZVFrjGMtTG6umTyKEk/dEjujqgLipe3/EXFxUFM440lOyp/SPfLuAKiDIBVl3jkQw3juwZ82hNGJaUKdCl6FNdkZ4nmSe0kk+2BISl676eWg6owyqIKrLx232ytBSOa7as2AQSyIOBMukzLW/RrXOlqCbZpoKNGs9QELsrSq1gACeDF3QA8uPKB9NhqPVuh5bSNeulR/O8lRcKFzydwMu3XjCjgM4zPrqdHVMfu7y7U8tpqdQe0NTz75NVNWKW406t1TcDAdbisx4fWWozIx+8pnoanpK33o9G7T1XUUK2Ox1+jY96pArjan39Bg1Gvb1McCdu3f2FdtT7pK2el9IUd1zaVHA3bS7LE9xplsjvUSTsNaaNRxSrh7esf9OsNknhnYb0XG/ipIlgECOtdIPUxm3rJ1ltgAfryfCSM8xArWnbGlbk3iKFKlRX2cKtSgTsv5YcG2FYuG4jZxnBINCpWTCtU0Pv2al95d9xx8jCJVIzyywC9+ZqembMV6FekeFSlUQ/iQr/AFkPqpbJXW3vyM1qtnRpseoDLtjvY7/uiBE9MF15LRrgfXZFx2HIM5xm2dPd7hLWiD6TO5HYAoGfaZicBERKEREBERAREQEREBERAREQOrdSb3y9haVM5JooD95Rst71MnpnPQjpDymjzTPGjVdfwthwfFm8Jo0gTMNZqxa6vMHeDQpDPDZSl5UjuLXA/LNPmWa1JsX9wvrrRq+KeSP/AIYErqnrerIqVyQB5u0eKEcUqY6vWHLHLfL2lQMAQQQeBG8HuMwXTtyLYLWT0yyqV4Bxv3N1EAEhv4jdJTQOt+yAaNYpv3o43Z5gqd3tEDXr+wpV0KVqaVFP1WUMM8jg8D2yNtNFVLXdb1Walu+irMX2f+lVOXH3W2h1bMj9D6y3FfAFtt9bKxRR37QIHdnMtNMkgbQAPMA5HjgZgKZJGSCD1HGR4EieyIgJWOj0bNklP/aq3NPuCXFQKPy4lnlX1O8xr+mfqX1Zh92qqVh7MufCBkfTfe+U0gqA7qVFFI6mYs59zLM4k3rjpP5Xe3NYHIeq2yfsL5qfpUSEgIiJQiIgIiICIiAiIgIiICIiBrHQNpDZuLmgT+8pq470bB9uH903Ocu9G2kPk+krVyfNZ/JnuqAoM9mWB9k6ikCZ/wBJlmUNC8UErTzTrY5UnIKuexXHgxmgT016S1FZXUMrAhlIBBB3EEHiIHN+udztPSQHcqlzjhljhfcD4yL0TpVrVw28o2A6jq5MPtD3zzpwUxc3AoAiktV1pgsWwisVUAnfs9XUJHVxlT3QOktQtKpcW6hGDbGcEc1JJB8cr+GWiYHqDctQp061FthhtK44o4DH0168Y3jB3DqE2DQenhdKfMZWXGcYYb84xjfyPEQJyIiAmZ626VbR9xpArnFzZpUXsqJt0mP5Av6Zpkybp2tyKNvWX1not2h9moPfS98DDYiJQiIgIiICIiAiIgIiICIiAiIge2hVZGV1OCpDA9RByD4idd6MvFr0aVVfRqU0cdzKGH8Zx/Oj+h/SvyjRyITlqDNTP3QdpP0kD2SC+SI1o0l8ktLivzp0nZfv4wg/MQJLzNum3SOxZJQB316qgj7Cee36tiBh9JcKBPL8D3GeZ4c7j3GVVt1DqZoOvqvn2FV/qDNF1Muti4C8qilfaPOU+4j8UyvUCrhqydaq3gSD/MJf9GVditSbqdD7NoZ90iNbiIgJSuluy8royvgZNMpUH4XAY/lLS6yN0/Z+Xtril/uUai+1kIHvgcjREShERAREQEREBEmPm9V9ZPFvhj5vVfWTxb4ZBDxJj5vVfWTxb4Y+b1X1k8W+GBDxJj5vVfWTxb4Y+b1X1k8W+GBDxJj5vVfWTxb4Y+b1X1k8W+GBDzVeg3Snk69WgTuqKCB9oZ3+4D8UoXzeq+sni3wyZ1Yt6tncLVLKQoPok54hlwCB9ZRA6amDdMukvK3y0gci3pAEdTudo/o2Jon7SLTmlx+VPjmOaeo1Lq5uLglfpajMoJOQnBAd3EKAPZAgJ+Lg4UyT/wDyX618T/6nrraGqMMBk8W+GA1KrbNyo9dHX3bX9s0u0GXQfbT+YTNtG6Jq0aqPtJ5jAne28cx6PVmXmjphFZWw/msDwHIg9cDcIlL/AGkWn+3cflT44/aRaepcflT44F0iUv8AaRaepcflT44/aRaepcflT44HPOnrYUrm4pjhTrVV/K7D+kjpb9atHm6vK9eiQEq1C4D5DDa3nIGRxzzkR83qvrJ4t8MCHiTy6q3BwQoIPDAff3ebPPzUuPVHg/wwICJOpqvcNvUKRnGRtYz1ejP0dVLj1R4P8MCAiWL5o3OztbK4zj62ckZG7Zzwzv7J6X1YrrxCjv2v6rAskREiEREBERAREQEREBERAREQEREBERAREQERECwWemqopU183CqFAweBG/n3+Jn7TTtXH1dzYHpbvMC5BznOOcRA+W001U2H3JuVjwPAAgKd+8YPf27zn6Bp2oGfAUbDEj0uJpgHPnb908RAPpeoRnCggNjAI5OCePHDt4yJ01pB6zJt43IMYzz3nn1xED//2Q=='
                },
                {
                    name: 'Petya',
                    img: 'data:image/jpeg;base64,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'
                }
            ]
        }
    },
    _callsubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callsubscriber(this._state)
    }

}

export default store;
window.store = store;