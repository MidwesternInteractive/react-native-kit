# Starter React Native Mobible App

One of the most time consuming steps of mobile application development is laying the foundation. Much of this time is spent setting up the navigator or navigigators, organizing file structure and adding in the majority of the packages we will use throughout the development process of the app. This app is a skeleton that can be molded into practically any appliation. This template is very easy to style and manipulate to the way that best suits the project we are working on at the time and will act as a massive time saver.


## Prerequisites

The first thing you will need to get started is the latest version of Homebrew. Once you have it run the folling commands

Note: If you already have Node installed, be sure that it is 4.0 or higher

```
brew install node
brew install watchman
```

The next step is to actually install the command line for React Native, to do this simply run this command 

```
npm install -g react-native-cli
```

You now have access to create a react app on your local machine however development would be nearly impossible without the right SDK. 
This where the tutorial will split, we will first go over configuration of IOS and then with Android. 

###For IOS 

Go to the Mac App Store and download xCode. This will automatically install the the developer tools and IOS simulator required to properly debug your application. 

Note: if you already have xCode on your machine, make sure that you are running 8.0 or higher.

###For Andorid

This Process is a little more involved 
Head over to https://developer.android.com/studio/index.html and download the latest version of Android Studio. 
When prompted choose a "Custom" installation and check the boxes next to these items.

```
Android SDK
Android SDK Platform
Performance (Intel ® HAXM)
Android Virtual Device
```

Then click next, this will install of the components you just checked. Once that has been completed, you will be greeted with a welcome screen.

On the welcome page, click on configure, then SDK manager.
On the SDK Platfroms tab, you should see a checkbox in the bottom right that says show package details, be sure to check that.

Now you confirm that all of these are checked, if not, check them

```
Google APIs
Android SDK Platform 23
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom_64 System Image
```

Then slide over to the SDK tools and make sure that 23.0.1 is selcted, you can install more than one. But a minimum of 23.0.1 is required
Click apply to install everything we just selected

Finally, make your way to your $HOME/.bash_profile and add the following lines

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Your machine is now ready for React Native Developemnt

If you wanted to make an app from scratch, all you have to do is cd into the directory you wish to keep the app and 
run the command

```
react-native init nameOfYourNewProject


If are already have a React Native App
```
npm install
```
react-native init nameOfYourNewProject
```

To debug the app, clone it on to your local machine and run the command

```
react-native run-ios
```
or

```
react-native run-android
```

This will bring up the simulator and by clicking 'command + r' on the IOS and 'R,R' on android your app will be reloaded using the updated code.

##Adding Custom Fonts to our App

Collect all fonts you want to use for IOS and Android and place it in the directory inside your project. For example in ./assets/fonts/

Then, slide over to the package.json and add the following lines to the bottom.

```
“rnpm”: {
   “assets”: [“./path to your fonts”]
}
in our example path is - ./assets/fonts
```

Open up terminal, cd into your projects directory and run

```
react-native link
```

You have just successfully linked your font asset to both your android and IOS project with one command.


##Configuring One Signal to meet a client's needs

###For IOS

The React Native One Signal Package has already been installed and linked into the xCode Project but it is linked up to the Midwestern Interactive One Signal Account. To fix this you first need to create a push certifcate from APNS (apple push notification services). This can be an annoying process when done manually. So One Singal Created a tool called the provisonator to make life easier. Visit that link
https://onesignal.com/provisionator

1. Once on the page click the blue button at the top that says "Get Started"

2. You will be prompted to enter your apple developer account credentials

3. Your team should appear under the form inputs, select it and click next

4. You will then see a picker come out, if you have built the app with an explicit appId (default when the app an app is created is called wildcard).

5. Selct the app ID you want to create the certificate for, it will generate 3 files. Download all 3 and make sure to copy the password on the p12

6. Upload the files to One Signal and it will assign you app a One Signal appID


Now Copy that and place that in the AppDelegate.m file where I have commented.

Finally click on the root project and in the top navigation bar and go to compatibility.

Slide the swich that says, Push Notifications and you should two checkmars appear under the switch

Slide the switch that says Background Modes, and check the 'Remote Notifications' box














