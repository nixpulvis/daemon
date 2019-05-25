use chrono::prelude::*;
use chrono::Duration;

pub struct Event {
    name: String,
    // start: DateTime<Utc>,
    // end: DateTime<Utc>,
}

impl Event {
    pub fn new(name: String) -> Self {
        Event {
            name: name,
            // start: Utc::now(),
            // end: Utc::now() + Duration::hours(3),
        }
    }

    pub fn to_string(&self) -> String {
        // format!("{}: from: {} until {}", self.name, self.start, self.end)
        format!("{}", self.name)
    }
}

pub struct Task;
