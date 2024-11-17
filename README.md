# **USA Election Votes**

## **Pages**

1. **Login Page**
   - **Purpose:** Allow users to log in and authenticate.
   - **Components:**
     - Email input field
     - Password input field
     - Login button
     - Forgot password link
   - **State management:**
     - Manage login state (e.g., `isLoggedIn`)
     - Handle user authentication errors (e.g., invalid credentials)
2. **Home Page**
   - **Purpose:** Show election details and allow voting for candidates.
   - **Components:**
     - List of presidents or candidates
     - Voting buttons
     - Display current vote counts
     - User details (e.g., logged-in user name)
   - **State management:**
     - Track user votes (e.g., `userVoted`)
     - Display voting status (e.g., "Voted" or "Vote")
     - Handle data updates in real-time (e.g., voting updates)

## **Data**

1. **Users**
   - **Attributes:**
     - `id`: Unique identifier
     - `name`: User name
     - `email`: User email
     - `password`: User password (hashed)
     - `voted`: Boolean to track whether a user has voted or not
   - **Operations:**
     - Create new users
     - Validate login credentials
     - Track voting status
2. **Presidents (Candidates)**
   - **Attributes:**
     - `id`: Unique identifier for the president
     - `name`: Name of the president
     - `src`: Image URL of the president
     - `votes`: Total number of votes
   - **Operations:**
     - List all presidents
     - Track votes for each president
     - Update votes when a user votes

## **Functions**

1. **User Authentication**

   - **Login:** Authenticate user based on email and password.
     - Input: Email, Password
     - Output: Authenticated user object or error message
   - **Logout:** Log the user out and clear session or local storage.
     - Input: None
     - Output: Logout confirmation and redirect to Login page

2. **Voting Functions**

   - **Vote for President:**
     - Input: President `id`, User `id`
     - Output: Updated vote count for the president and status update for the user
     - Logic: Check if the user has already voted. If not, allow the vote and update vote count.
   - **Update Votes:** (for after vote submission)
     - Input: `presidentId`, `votes` (current)
     - Output: Updated president's vote count
     - Logic: After vote, update the vote count of the selected president in the database (API or local storage).
   - **Display Current Vote Count:**
     - Input: President `id`
     - Output: Display the current number of votes for the president
     - Logic: Fetch current votes from the backend and update the UI.
   - **Change Vote:** (if voting rules allow)
     - Input: User's `oldVote`, `newVote`
     - Output: Updated vote for the president and UI updates
     - Logic: Allow users to change their vote (if applicable), and ensure vote count is updated accordingly.

3. **UI Functions**

   - **Show Voting Status:**
     - Input: User `voted` status
     - Output: Display either "Vote" or "Voted" on the button
     - Logic: Conditional rendering based on whether the user has voted.
   - **Update Vote Button:**
     - Input: `isVoting`, `hasVoted`
     - Output: Change text on the vote button to "I'm Sure", "Cancel", or "Voted"
     - Logic: Conditional rendering of vote button state.

4. **API Functions** (if data is fetched from an external source)

   - **Get Presidents Data:**
     - Input: None
     - Output: List of presidents with their current vote counts
     - Logic: Fetch data from API or local database to display the list of presidents and their details.
   - **Get User Data:**
     - Input: User `id`
     - Output: User data (name, email, vote status)
     - Logic: Fetch the user details to manage authentication and voting status.
