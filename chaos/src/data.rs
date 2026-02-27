use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};
use serde_json::Value;

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    let mut string_len: usize = 0;
    let mut int_sum: i64 = 0;

    for item in request.data {
        if let Some(text) = item.as_str() {
            string_len += text.len();
        } else if let Some(n) = item.as_i64() {
            int_sum += n;
        }
    }

    let response = DataResponse {
        string_len,
        int_sum,
    };

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
pub struct DataRequest {
    pub data: Vec<Value>,
}

#[derive(Serialize)]
pub struct DataResponse {
    pub string_len: usize,
    pub int_sum: i64,
}
