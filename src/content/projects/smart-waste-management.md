---
title: "Smart Waste Management System"
description: "IoT-based waste monitoring system with real-time fill level tracking and optimized collection routes."
impact: "Collection routes driven by live bin fill levels instead of fixed schedules"
tech: ["Java", "Spring Boot", "React", "PostgreSQL"]
status: "featured"
type: "Personal"
order: 3
image: "../../assets/projects/smart-waste-management.png"
links:
  github: "https://github.com/sasiiii02/Smart-Waste-Management"
---

## Overview

A full-stack system for monitoring waste bins across a city. IoT sensors report how full each bin is, and the system uses that data to plan efficient collection routes. The back end is Spring Boot with PostgreSQL, and the front end is a React dashboard.

## Key Features

- Real-time tracking of bin fill levels from IoT sensor data
- Route optimization for waste collection based on current fill levels
- Spring Boot REST API backed by PostgreSQL
- React dashboard for monitoring bins and collection routes

## How It Works

- Sensors on each bin send fill-level readings to the Spring Boot API
- Readings are stored in PostgreSQL, giving the dashboard live and historical views
- Collection routes are built from the bins that actually need emptying, rather than visiting every bin on a fixed schedule

## Tech

Java and Spring Boot for the API, PostgreSQL for storage, and React for the monitoring dashboard.
