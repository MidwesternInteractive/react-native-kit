/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate
@synthesize oneSignal = _oneSignal;



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

//Replace the appId with the one found in One Signal. Do this for both Actions below 
  
self.oneSignal = [[RCTOneSignal alloc] initWithLaunchOptions:launchOptions
                                                       appId:@"c653d5679-7ba2-4344-a53c-6dda42d75dfd"];

  // For requiring push notification permissions manually.
self.oneSignal = [[RCTOneSignal alloc] initWithLaunchOptions:launchOptions
                                                       appId:@"653d5679-7ba2-4344-a53c-6dda42d75dfd"
                         settings:@{kOSSettingsKeyAutoPrompt: @true}];

  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"templateApp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
