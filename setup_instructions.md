## Prerequisites

Ensure the following are installed on your machine:

1. **Node.js**
2. **Python**

## Installation and Execution Steps

Follow these steps to set up and run the project:

### Step 1: Download and Extract the Repository

1. Download the compressed file: `repository.rar`.
2. Extract the file to your desired location.

### Step 2: Open the Project

1. Open the project folder in your favorite code editor.

### Step 3: Navigate to the Browser Console Directory

1. Open a terminal and navigate to the `browser-console` directory:
   ```bash
   cd browser-console

### Step 4: Install Required Node Modules

1.  Run the following command to install the necessary modules:
    
    ```bash
    npm i
    
    ```
    

### Step 5: Open a Browser Tab

1.  Run the following command to manually open a browser tab. This tab will later be utilized by the agent:
    
    ```bash
    node console.js
    
    ```
    

### Step 6: Set Up Python Environment

1.  Open a new terminal and create a Python virtual environment:
    
    ```bash
    python -m venv myenv
    
    ```
    
2.  Activate the virtual environment:
    -   On Windows:
        
        ```bash
        myenv\Scripts\activate
        
        ```
        
    -   On Mac/Linux:
        
        ```bash
        source myenv/bin/activate
        
        ```
        

### Step 7: Install Python Dependencies

1.  Install all the required Python libraries:
    
    ```bash
    pip install -r requirements.txt
    
    ```
    

### Step 8: Run the Python Code

1.  Execute the main Python script:
    
    ```bash
    python crew.py
    
    ```
    

### Step 9: Provide User Input

1.  When prompted, provide the website link and other required details.  
    Example input:
```Link: https://docs.google.com/forms/d/e/1FAIpQLSf2_fACPWMHklwmHVIv822ESQ4uRgZND_dyvFBFu6HBlbRthA/viewform?usp=dialog,Name: Rishi,Email: RishiR@gmail.com,Phone number: 9442991239,Organization: Some,Agenda of Hackathon: API Development```